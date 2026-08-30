import * as vscode from "vscode";
import { HealthChecker } from "../../domain/services/healthChecker";

export class HealthCheckPanel {
  static async show(rootPath: string) {
    const checker = new HealthChecker();
    const result = await checker.check(rootPath);

    const panel = vscode.window.createWebviewPanel(
      "projectforgeHealth",
      "ProjectForge Health Check",
      vscode.ViewColumn.One,
      {}
    );

    panel.webview.html = `<html>
  <body style="font-family: system-ui; padding: 16px;">
    <h1>Health Check</h1>
    <pre>${JSON.stringify(result, null, 2)}</pre>
  </body>
</html>`;
  }
}
