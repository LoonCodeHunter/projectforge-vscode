import * as vscode from "vscode";
import { PackageManager } from "../../../domain/models/PackageManager";

export async function selectPackageManagerStep(): Promise<PackageManager> {
  const choice = await vscode.window.showQuickPick(
    ["npm", "pnpm", "yarn", "bun"],
    { placeHolder: "Select package manager" }
  );
  return (choice as PackageManager) ?? "npm";
}
