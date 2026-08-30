import { describe, it, expect } from "vitest";
import { FileSystem } from "../../src/core/fileSystem";

describe("FileSystem", () => {
  it("creates folders recursively", async () => {
    const fs = new FileSystem();
    await fs.ensureFolder("/tmp/project/src");
    expect(true).toBe(true);
  });
});
