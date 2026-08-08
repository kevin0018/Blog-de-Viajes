import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDirectory = new URL("../public/assets/images/", import.meta.url);
const files = await readdir(imagesDirectory);
const jpegFiles = files.filter((file) => [".jpg", ".jpeg"].includes(extname(file).toLowerCase()));

await Promise.all(jpegFiles.map(async (file) => {
    const source = new URL(file, imagesDirectory);
    const output = new URL(file.replace(/\.jpe?g$/i, ".webp"), imagesDirectory);
    await sharp(fileURLToPath(source)).webp({ quality: 78, effort: 5 }).toFile(fileURLToPath(output));
}));

await sharp(fileURLToPath(new URL("about.jpg", imagesDirectory)))
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(fileURLToPath(new URL("about-960.webp", imagesDirectory)));

const generated = [...jpegFiles.map((file) => file.replace(/\.jpe?g$/i, ".webp")), "about-960.webp"];
console.log(`Generated ${generated.length} optimized images in ${join("public", "assets", "images")}.`);
