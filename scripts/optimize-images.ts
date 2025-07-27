import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/products";
const outputDir = "public/products-optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".webp"));

files.forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize({ width: 800 })
    .webp({ quality: 70 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Optimized: ${file}`))
    .catch((err) => console.error(`❌ Error with ${file}:`, err));
});
