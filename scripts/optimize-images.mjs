import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDirectory = new URL("../public/assets/images/", import.meta.url);
const files = await readdir(imagesDirectory);
const jpegFiles = files.filter((file) => [".jpg", ".jpeg"].includes(extname(file).toLowerCase()));

await Promise.all(jpegFiles.map(async (file) => {
    const source = new URL(file, imagesDirectory);
    const basename = file.replace(/\.jpe?g$/i, "");

    await Promise.all([
        sharp(fileURLToPath(source))
            .webp({ quality: 78, effort: 5 })
            .toFile(fileURLToPath(new URL(`${basename}.webp`, imagesDirectory))),
        sharp(fileURLToPath(source))
            .avif({ quality: 50, effort: 5 })
            .toFile(fileURLToPath(new URL(`${basename}.avif`, imagesDirectory))),
    ]);
}));

const responsiveImages = [
    { source: "about.jpg", basename: "about-960", width: 960 },
    { source: "about.jpg", basename: "about-1440", width: 1440 },
    { source: "header-bg-1920.jpg", basename: "header-bg-640", width: 640 },
    { source: "header-bg-1920.jpg", basename: "header-bg-1440", width: 1440 },
];

await Promise.all(responsiveImages.flatMap(({ source, basename, width }) => [
    sharp(fileURLToPath(new URL(source, imagesDirectory)))
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 76, effort: 5 })
        .toFile(fileURLToPath(new URL(`${basename}.webp`, imagesDirectory))),
    sharp(fileURLToPath(new URL(source, imagesDirectory)))
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 50, effort: 5 })
        .toFile(fileURLToPath(new URL(`${basename}.avif`, imagesDirectory))),
]));

const generated = [
    ...jpegFiles.flatMap((file) => {
        const basename = file.replace(/\.jpe?g$/i, "");
        return [`${basename}.webp`, `${basename}.avif`];
    }),
    ...responsiveImages.flatMap(({ basename }) => [`${basename}.webp`, `${basename}.avif`]),
];
console.log(`Generated ${generated.length} optimized images in ${join("public", "assets", "images")}.`);
