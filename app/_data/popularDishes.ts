export type PopularDish = {
  name: string;
  /** Intended production thumbnail path — see app/_data/homeImages.ts's resolveImage(). */
  image: string;
};

// Dish list approved in CLAUDE.md §12a. No descriptions, ingredients or
// pricing on Home per spec — full detail lives on the Menu page.
export const popularDishes: PopularDish[] = [
  { name: "Fruit Platters", image: "/images/home/dish-fruit-platters.jpg" },
  { name: "Olivier Salad", image: "/images/home/dish-olivier-salad.jpg" },
  { name: "Mini Sandwiches", image: "/images/home/children-menu.png" },
  { name: "Pelmeni", image: "/images/home/dish-pelmeni.jpg" },
  { name: "Napoleon Cake", image: "/images/home/dish-napoleon-cake.jpg" },
  { name: "Stuffed Peppers", image: "/images/home/dish-stuffed-peppers.jpg" },
];
