import * as vscode from "vscode";
import { ProjectType } from "../../domain/models/ProjectType";
import { Language } from "../../domain/models/Language";
import { Framework } from "../../domain/models/Framework";
import { PackageManager } from "../../domain/models/PackageManager";
import { ExtraFeature } from "../../domain/models/ExtraFeature";

export interface ProjectForgePromptContext {
  type: ProjectType;
  language: Language;
  framework: Framework;
  packageManager: PackageManager;
  extras: ExtraFeature[];
}

export async function askRootFolder(): Promise<string | undefined> {
  const folder = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: "Select project root"
  });

  return folder?.[0]?.fsPath;
}

export function buildSummaryText(ctx: ProjectForgePromptContext): string {
  return [
    `Type: ${ctx.type}`,
    `Language: ${ctx.language}`,
    `Framework: ${ctx.framework}`,
    `Package Manager: ${ctx.packageManager}`,
    `Extras: ${ctx.extras.join(", ") || "none"}`
  ].join("\n");
}
