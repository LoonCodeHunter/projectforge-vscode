import * as vscode from "vscode";

const channel = vscode.window.createOutputChannel("ProjectForge");

export function logInfo(message: string) {
  channel.appendLine(`[INFO] ${message}`);
}

export function logError(message: string) {
  channel.appendLine(`[ERROR] ${message}`);
}
