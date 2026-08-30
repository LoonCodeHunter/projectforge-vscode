import * as vscode from "vscode";
import { selectProjectTypeStep } from "./steps/selectProjectTypeStep";
import { selectLanguageStep } from "./steps/selectLanguageStep";
import { selectFrameworkStep } from "./steps/selectFrameworkStep";
import { selectPackageManagerStep } from "./steps/selectPackageManagerStep";
import { selectStarterLevelStep } from "./steps/selectStarterLevelStep";
import { selectExtrasStep } from "./steps/selectExtrasStep";
import { confirmSummaryStep } from "./steps/confirmSummaryStep";
import { ProjectCreationApi } from "../../api/projectCreationApi";
import { ProjectSummaryPanel } from "../panels/projectSummaryPanel";
import { showError, showSuccess } from "../messages/notifications";

export async function runProjectWizard() {
  const type = await selectProjectTypeStep();
  const language = await selectLanguageStep(type);
  const framework = await selectFrameworkStep(type, language);
  const packageManager = await selectPackageManagerStep();
  const starterLevel = await selectStarterLevelStep();
  const extras = await selectExtrasStep();
  const confirmed = await confirmSummaryStep({
    type,
    language,
    framework,
    packageManager,
    starterLevel,
    extras
  });

  if (!confirmed) {
    showError("Project creation cancelled.");
    return;
  }

  const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!rootPath) {
    showError("No workspace folder found.");
    return;
  }

  ProjectSummaryPanel.show({
    rootPath,
    type,
    language,
    framework,
    packageManager,
    starterLevel,
    extras
  });

  const api = new ProjectCreationApi();
  const result = await api.createProject({
    rootPath,
    stackId: type
  });

  if (result.success) {
    showSuccess("Project created successfully.");
  } else {
    showError("Failed to create project.");
  }
}
