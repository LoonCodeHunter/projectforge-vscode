import * as vscode from "vscode";

export function showSuccess(message: string) {
  vscode.window.showInformationMessage(`ProjectForge: ${message}`);
}

export function showError(message: string) {
  vscode.window.showErrorMessage(`ProjectForge: ${message}`);
}

export function showWarning(message: string) {
  vscode.window.showWarningMessage(`ProjectForge: ${message}`);
}
