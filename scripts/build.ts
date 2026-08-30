import { execSync } from "node:child_process";

console.log("[build] Compiling TypeScript...");
execSync("tsc -p tsconfig.build.json", { stdio: "inherit" });
console.log("[build] Done.");
