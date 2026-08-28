import path from "path";
import { cache } from "react";
import ExcelJS from "exceljs";
import { resolveImage } from "../../_data/homeImages";
import type { MenuCardData, MenuCategoryData, MenuSubcategory, MenuVariant } from "./types";

// docs/lanafood_menu.xlsx is the single source of truth for menu content
// (CLAUDE.md / MENU.md). This module is the only place that reads it —
// everything downstream (tabs, cards, search, structured data) works off the
// typed MenuCategoryData[] this produces. Edit the spreadsheet, not this file,
// to change dish content; only structural spreadsheet changes (new sheets,
// renamed columns) require touching this parser.

// The `categories` sheet is authoritative for tab names/order — never
// hardcoded. Each category row corresponds 1:1, by position, to one of these
// worksheets: the workbook author names each item sheet after its category
// (holiday_menu, everyday_menu, kids_menu, gastroboxes), which is the only
// reliable structural link between a category and its rows. The item sheets'
// own inline "Category" text column is inconsistent (e.g. "Children's Menu",
// "Gastro Boxes" instead of the categories sheet's "Kids' Menu"/"GastroBoxes"),
// so it is intentionally never used for category assignment.
const CATEGORY_SHEET_NAMES = ["holiday_menu", "everyday_menu", "kids_menu", "gastroboxes"];

type Cell = string | number | boolean | null;
type Row = Record<string, Cell>;

function normalizeCell(v: ExcelJS.CellValue): Cell {
  if (v === undefined || v === null) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "object") {
    if ("text" in v && typeof v.text === "string") return v.text;
    if ("result" in v) return normalizeCell(v.result as ExcelJS.CellValue);
    if ("richText" in v && Array.isArray(v.richText)) {
      return v.richText.map((t) => t.text).join("");
    }
    return null;
  }
  return v;
}

function sheetToRows(ws: ExcelJS.Worksheet): Row[] {
  const rows: Row[] = [];
  let headers: string[] = [];
  ws.eachRow((row, rowNumber) => {
    const values = row.values as ExcelJS.CellValue[]; // 1-indexed; [0] unused
    if (rowNumber === 1) {
      headers = values.map((v) => (typeof v === "string" ? v.trim() : ""));
      return;
    }
    const obj: Row = {};
    headers.forEach((h, i) => {
      if (!h) return;
      obj[h] = normalizeCell(values[i]);
    });
    rows.push(obj);
  });
  return rows;
}

function str(row: Row, key: string): string | undefined {
  const v = row[key];
  if (typeof v === "string") {
    const trimmed = v.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }
  if (typeof v === "number") return String(v);
  return undefined;
}

function num(row: Row, key: string): number | undefined {
  const v = row[key];
  return typeof v === "number" ? v : undefined;
}

function bool(row: Row, key: string, fallback: boolean): boolean {
  const v = row[key];
  return typeof v === "boolean" ? v : fallback;
}

type RawItemRow = {
  subcategory?: string;
  name: string;
  group: boolean;
  groupId?: string;
  variant?: string;
  quantity?: number;
  quantityUnit?: string;
  weight?: number;
  weightUnit?: string;
  price?: number;
  currency: string;
  description?: string;
  ingredients?: string;
  allergens?: string;
  photo?: string;
  displayOrder: number;
  featured: boolean;
  available: boolean;
};

function toRawItemRow(row: Row): RawItemRow | null {
  const name = str(row, "Name");
  if (!name) return null;
  if (!bool(row, "Published", true)) return null;
  return {
    subcategory: str(row, "Subcategory"),
    name,
    group: bool(row, "Group", false),
    groupId: str(row, "Group ID"),
    variant: str(row, "Variant"),
    quantity: num(row, "Quantity"),
    quantityUnit: str(row, "Quantity Unit"),
    weight: num(row, "Weight"),
    weightUnit: str(row, "Weight Unit"),
    price: num(row, "Price"),
    currency: str(row, "Currency") ?? "",
    description: str(row, "Description"),
    ingredients: str(row, "Ingredients"),
    allergens: str(row, "Allergens"),
    photo: str(row, "Photo"),
    displayOrder: num(row, "Display Order in Subcategory") ?? Number.MAX_SAFE_INTEGER,
    featured: bool(row, "Featured", false),
    available: bool(row, "Available", true),
  };
}

// Groups published rows into display cards (Group/Group ID → one card with
// multiple variants, per MENU.md "Grouped Cards and Variants"), bucketed by
// subcategory, preserving spreadsheet row order as the variant order and
// Display Order in Subcategory as the card order.
function buildSubcategories(rows: RawItemRow[], subcategoryOrder: string[]): MenuSubcategory[] {
  type Bucketed = { subcategory: string | null; card: MenuCardData };
  const groupBuckets = new Map<string, RawItemRow[]>();
  const bucketOrder: string[] = [];

  rows.forEach((row, index) => {
    const sub = row.subcategory ?? "";
    const key = row.group && row.groupId ? `${sub}|g:${row.groupId}` : `${sub}|s:${index}`;
    if (!groupBuckets.has(key)) {
      groupBuckets.set(key, []);
      bucketOrder.push(key);
    }
    groupBuckets.get(key)!.push(row);
  });

  const bucketed: Bucketed[] = bucketOrder.map((key) => {
    const members = groupBuckets.get(key)!;
    const first = members[0];
    const variants: MenuVariant[] = members.map((m) => ({
      variant: m.variant,
      quantity: m.quantity,
      quantityUnit: m.quantityUnit,
      weight: m.weight,
      weightUnit: m.weightUnit,
      price: m.price,
      currency: m.currency,
      description: m.description,
      ingredients: m.ingredients,
      allergens: m.allergens,
      available: m.available,
    }));
    const rawPhoto = members.find((m) => m.photo)?.photo;

    return {
      subcategory: first.subcategory ?? null,
      card: {
        id: key,
        name: first.name,
        featured: members.some((m) => m.featured),
        displayOrder: Math.min(...members.map((m) => m.displayOrder)),
        // Resolved here (server-only, needs `fs`) so downstream components —
        // including client ones like MenuCardModal — only ever handle a
        // plain string src, never the resolveImage()/fs machinery itself.
        photo: rawPhoto ? resolveImage(`/images/menu/${rawPhoto}`) : undefined,
        available: variants.some((v) => v.available),
        variants,
      },
    };
  });

  const orderedNames = [...subcategoryOrder];
  for (const { subcategory } of bucketed) {
    if (subcategory && !orderedNames.includes(subcategory)) orderedNames.push(subcategory);
  }
  const hasUnnamed = bucketed.some((b) => b.subcategory === null);
  const names: (string | null)[] = hasUnnamed ? [...orderedNames, null] : orderedNames;

  return names
    .map((name) => ({
      name,
      cards: bucketed
        .filter((b) => b.subcategory === name)
        .map((b) => b.card)
        .sort((a, b) => a.displayOrder - b.displayOrder),
    }))
    .filter((s) => s.cards.length > 0);
}

async function loadWorkbook(): Promise<ExcelJS.Workbook> {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(path.join(process.cwd(), "docs", "lanafood_menu.xlsx"));
  return wb;
}

async function parseMenu(): Promise<MenuCategoryData[]> {
  const wb = await loadWorkbook();

  const categoriesSheet = wb.getWorksheet("categories");
  const subcategoriesSheet = wb.getWorksheet("subcategories");
  if (!categoriesSheet || !subcategoriesSheet) return [];

  const categoryRows = sheetToRows(categoriesSheet);
  const subcatRows = sheetToRows(subcategoriesSheet);

  const subcatOrderByCategory = new Map<string, string[]>();
  for (const row of subcatRows) {
    const cat = str(row, "Category");
    const sub = str(row, "Subcategory");
    if (!cat || !sub) continue;
    const list = subcatOrderByCategory.get(cat) ?? [];
    if (!list.includes(sub)) list.push(sub);
    subcatOrderByCategory.set(cat, list);
  }

  const slugFromSheetName = (sheetName: string) => sheetName.replace(/_menu$/, "");

  const categories: MenuCategoryData[] = [];
  const count = Math.min(categoryRows.length, CATEGORY_SHEET_NAMES.length);
  for (let i = 0; i < count; i++) {
    const name = str(categoryRows[i], "Category");
    const sheetName = CATEGORY_SHEET_NAMES[i];
    const sheet = wb.getWorksheet(sheetName);
    if (!name || !sheet) continue;

    const rawRows = sheetToRows(sheet)
      .map(toRawItemRow)
      .filter((r): r is RawItemRow => r !== null);

    const subcategories = buildSubcategories(rawRows, subcatOrderByCategory.get(name) ?? []);
    const hasSubcategories = subcategories.some((s) => s.name !== null);

    categories.push({
      slug: slugFromSheetName(sheetName),
      name,
      hasSubcategories,
      subcategories,
    });
  }

  return categories;
}

export const getMenuData = cache(parseMenu);
