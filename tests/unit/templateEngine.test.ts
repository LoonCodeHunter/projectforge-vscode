import { describe, it, expect } from "vitest";
import { TemplateEngine } from "../../src/core/templateEngine";

describe("TemplateEngine", () => {
  it("applies a template to a target path", async () => {
    const engine = new TemplateEngine();
    const result = await engine.applyTemplate("react-ts-advanced", "/tmp/project");
    expect(result.success).toBe(true);
  });
});
