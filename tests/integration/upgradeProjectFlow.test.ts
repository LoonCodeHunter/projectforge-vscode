import { describe, it, expect } from "vitest";
import { ProjectUpgradeApi } from "../../src/api/projectUpgradeApi";

describe("UpgradeProjectFlow", () => {
  it("runs upgrade on an existing project", async () => {
    const api = new ProjectUpgradeApi();
    const result = await api.upgradeProject("/tmp/projectforge-upgrade");
    expect(result.success).toBe(true);
  });
});
