import * as vscode from "vscode";

export type StarterLevel = "basic" | "advanced" | "enterprise";

export async function selectStarterLevelStep(): Promise<StarterLevel> {
  const choice = await vscode.window.showQuickPick(
    ["basic", "advanced", "enterprise"],
    { placeHolder: "Select starter level" }
  );
  return (choice as StarterLevel) ?? "advanced";
}
