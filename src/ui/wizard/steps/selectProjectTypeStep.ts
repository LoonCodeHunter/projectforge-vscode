import * as vscode from "vscode";
import { ProjectType } from "../../../domain/models/ProjectType";

export async function selectProjectTypeStep(): Promise<ProjectType> {
  const choice = await vscode.window.showQuickPick(
    ["web", "backend", "bots", "desktop", "monorepo", "extension"],
    { placeHolder: "Select project type" }
  );
  return (choice as ProjectType) ?? "web";
}
