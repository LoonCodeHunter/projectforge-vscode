import * as vscode from "vscode";

export class WorkspaceManager {
  getRootPath(): string | undefined {
    const folders = vscode.workspace.workspaceFolders;
    return folders?.[0]?.uri.fsPath;
  }
}
