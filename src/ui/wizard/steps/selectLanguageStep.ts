import * as vscode from "vscode";
import { Language } from "../../../domain/models/Language";
import { ProjectType } from "../../../domain/models/ProjectType";

export async function selectLanguageStep(type: ProjectType): Promise<Language> {
  const options: Language[] =
    type === "backend"
      ? ["typescript", "python"]
      : type === "desktop"
      ? ["typescript", "rust"]
      : ["typescript", "javascript"];

  const choice = await vscode.window.showQuickPick(options, {
    placeHolder: "Select primary language"
  });

  return choice ?? "typescript";
}
