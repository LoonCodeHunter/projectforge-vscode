import { execa } from "execa";

export class CommandRunner {
  async run(cmd: string, args: string[], cwd?: string) {
    const result = await execa(cmd, args, { cwd, stdio: "inherit" });
    return { code: result.exitCode };
  }
}
