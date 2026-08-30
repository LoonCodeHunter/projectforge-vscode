import * as vscode from "vscode";
import { ProjectType } from "../../../domain/models/ProjectType";
import { Language } from "../../../domain/models/Language";
import { Framework } from "../../../domain/models/Framework";
import { PackageManager } from "../../../domain/models/PackageManager";
import { StarterLevel } from "./selectStarterLevelStep";
import { ExtraFeature } from "../../../domain/models/ExtraFeature";

interface Summary {
  type: ProjectType;
  language: Language;
  framework: Framework;
  packageManager: PackageManager;
  starterLevel: StarterLevel;
  extras: ExtraFeature[];
}

export async function confirmSummaryStep(summary: Summary): Promise<boolean> {
  const message = `Type: ${summary.type}
Language: ${summary.language}
Framework: ${summary.framework}
Package Manager: ${summary.packageManager}
Starter Level: ${summary.starterLevel}
Extras: ${summary.extras.join(", ") || "none"}`;

  const choice = await vscode.window.showInformationMessage(
    `Confirm ProjectForge configuration:\n\n${message}`,
    { modal: true },
    "Confirm",
    "Cancel"
  );

  return choice === "Confirm";
}
