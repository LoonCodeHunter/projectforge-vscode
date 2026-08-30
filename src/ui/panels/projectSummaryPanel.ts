import * as vscode from "vscode";

export class ProjectSummaryPanel {
  static show(summary: unknown) {
    const panel = vscode.window.createWebviewPanel(
      "projectforgeSummary",
      "ProjectForge Project Summary",
      vscode.ViewColumn.One,
      {}
    );

    panel.webview.html = `<html>
  <body style="font-family: system-ui; padding: 16px;">
    <h1>Project Summary</h1>
    <pre>${JSON.stringify(summary, null, 2)}</pre>
  </body>
</html>`;
  }
}
