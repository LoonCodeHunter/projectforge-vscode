import * as vscode from "vscode";
import { Framework } from "../../../domain/models/Framework";
import { ProjectType } from "../../../domain/models/ProjectType";
import { Language } from "../../../domain/models/Language";

export async function selectFrameworkStep(
  type: ProjectType,
  language: Language
): Promise<Framework> {
  let options: Framework[] = [];

  if (type === "web") {
    options = ["react", "nextjs"];
  } else if (type === "backend") {
    options = language === "python" ? ["fastapi"] : ["express", "nestjs"];
  } else if (type === "desktop") {
    options = ["electron", "tauri"];
  } else {
    options = ["react"];
  }

  const choice = await vscode.window.showQuickPick(options, {
    placeHolder: "Select framework"
  });

  return choice ?? options[0];
}
