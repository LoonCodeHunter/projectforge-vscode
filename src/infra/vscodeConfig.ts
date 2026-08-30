import * as vscode from "vscode";

export class VSCodeConfig {
  get<T>(key: string, defaultValue: T): T {
    const config = vscode.workspace.getConfiguration("projectforge");
    return config.get<T>(key, defaultValue)!;
  }
}
