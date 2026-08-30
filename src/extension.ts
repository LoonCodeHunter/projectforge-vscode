import * as vscode from "vscode";
import { runProjectWizard } from "./ui/wizard/projectWizard";
import { ProjectUpgradeApi } from "./api/projectUpgradeApi";
import { HealthCheckPanel } from "./ui/panels/healthCheckPanel";
import { showError, showSuccess } from "./ui/messages/notifications";
import { logInfo } from "./utils/logger";

export function activate(context: vscode.ExtensionContext) {
  logInfo("ProjectForge activated.");

  const createProject = vscode.commands.registerCommand(
    "projectforge.createProject",
    async () => {
      await runProjectWizard();
    }
  );

  const upgradeProject = vscode.commands.registerCommand(
    "projectforge.upgradeProject",
    async () => {
      const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!rootPath) {
        showError("No workspace folder found.");
        return;
      }

      const api = new ProjectUpgradeApi();
      const result = await api.upgradeProject(rootPath);

      if (result.success) {
        showSuccess("Project upgraded.");
      } else {
        showError("Upgrade failed.");
      }
    }
  );

  const healthCheck = vscode.commands.registerCommand(
    "projectforge.healthCheck",
    async () => {
      const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!rootPath) {
        showError("No workspace folder found.");
        return;
      }

      await HealthCheckPanel.show(rootPath);
    }
  );

  const openWizard = vscode.commands.registerCommand(
    "projectforge.openWizard",
    async () => {
      await runProjectWizard();
    }
  );

  context.subscriptions.push(createProject, upgradeProject, healthCheck, openWizard);
}

export function deactivate() {
  logInfo("ProjectForge deactivated.");
}
