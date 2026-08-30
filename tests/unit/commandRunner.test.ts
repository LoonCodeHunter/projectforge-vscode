import { describe, it, expect } from "vitest";
import { CommandRunner } from "../../src/core/commandRunner";

describe("CommandRunner", () => {
  it("runs a simple command", async () => {
    const runner = new CommandRunner();
    const result = await runner.run("node", ["-v"]);
    expect(result.code).toBe(0);
  });
});
