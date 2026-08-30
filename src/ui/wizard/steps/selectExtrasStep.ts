import * as vscode from "vscode";
import { ExtraFeature } from "../../../domain/models/ExtraFeature";

export async function selectExtrasStep(): Promise<ExtraFeature[]> {
  const choices: ExtraFeature[] = ["eslint", "prettier", "docker", "github-actions", "env"];

  const picked = await vscode.window.showQuickPick(choices, {
    canPickMany: true,
    placeHolder: "Select extra features"
  });

  return (picked as ExtraFeature[]) ?? [];
}
