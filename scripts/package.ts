import { execSync } from "node:child_process";

console.log("[package] Packaging VS Code extension...");
execSync("npx vsce package", { stdio: "inherit" });
console.log("[package] Package created.");
