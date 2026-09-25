import { openSync, readSync, closeSync } from "fs";
import path from "path";

type Dimensions = { width: number; height: number };

function readPngDimensions(buf: Buffer): Dimensions | undefined {
  if (buf.length < 24) return undefined;
  if (buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) return undefined;
  // IHDR is always the first chunk, immediately after the 8-byte signature:
  // 4 bytes length, 4 bytes "IHDR", then 4 bytes width, 4 bytes height.
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpegDimensions(buf: Buffer): Dimensions | undefined {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return undefined;
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buf[offset + 1];
    // SOFn markers (0xC0–0xCF, excluding the DHT/JPG/DAC markers 0xC4/0xC8/
    // 0xCC) all carry width/height at the same offset within the segment.
    const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (offset + 4 > buf.length) return undefined;
    const segmentLength = buf.readUInt16BE(offset + 2);
    if (isSof) {
      if (offset + 9 > buf.length) return undefined;
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    offset += 2 + segmentLength;
  }
  return undefined;
}

// Reads just enough of a photo's header bytes to find its pixel dimensions —
// JPEG and PNG only (the realistic formats for real dish photography), no
// image-processing dependency. Used only to decide the menu-card photo
// container's aspect ratio (see photos.ts/MENU photo spec "Image
// Aspect-Ratio Rule") — never to resize, crop, or otherwise touch the
// source file itself. Returns undefined for any other format, or a
// missing/corrupt/unreadable file, so callers can fall back safely.
export function readImageDimensions(publicRelativePath: string): Dimensions | undefined {
  const absolute = path.join(process.cwd(), "public", publicRelativePath);
  let fd: number | undefined;
  try {
    fd = openSync(absolute, "r");
    // Headers sit within the first few KB even for a multi-MB photo.
    const buf = Buffer.alloc(65536);
    const bytesRead = readSync(fd, buf, 0, buf.length, 0);
    const slice = buf.subarray(0, bytesRead);
    return readPngDimensions(slice) ?? readJpegDimensions(slice);
  } catch {
    return undefined;
  } finally {
    if (fd !== undefined) closeSync(fd);
  }
}
