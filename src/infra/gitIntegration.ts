import { CommandRunner } from "../core/commandRunner";

export class GitIntegration {
  private runner = new CommandRunner();

  async initGit(rootPath: string) {
    await this.runner.run("git", ["init"], rootPath);
  }
}
