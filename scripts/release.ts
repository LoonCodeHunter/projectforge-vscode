import { execSync } from "node:child_process";

console.log("[release] Building and packaging...");
execSync("npm run build", { stdio: "inherit" });
execSync("npm run package", { stdio: "inherit" });
console.log("[release] Ready for publish.");
