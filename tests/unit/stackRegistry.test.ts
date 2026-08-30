import { describe, it, expect } from "vitest";
import { StackRegistry } from "../../src/domain/services/stackRegistry";

describe("StackRegistry", () => {
  it("returns available stacks", () => {
    const registry = new StackRegistry();
    const stacks = registry.getStacks();
    expect(stacks.web.length).toBeGreaterThan(0);
  });
});
