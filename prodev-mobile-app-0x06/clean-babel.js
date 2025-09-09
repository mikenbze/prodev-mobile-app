const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();

function deleteIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ Deleted: ${filePath}`);
  }
}

function scanAndClean(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !["node_modules", ".git"].includes(file)) {
      scanAndClean(fullPath);
    } else {
      if (
        file === ".babelrc" ||
        file === ".babelrc.js" ||
        file === ".babelrc.json" ||
        (file.startsWith("babel.config.") && file !== "babel.config.js")
      ) {
        deleteIfExists(fullPath);
      }
    }
  }
}

console.log("🔍 Scanning project for stray Babel configs...");
scanAndClean(projectRoot);
console.log("✅ Cleanup complete! Only babel.config.js should remain.");
