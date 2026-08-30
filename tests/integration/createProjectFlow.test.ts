import { describe, it, expect } from "vitest";
import { ProjectCreationApi } from "../../src/api/projectCreationApi";

describe("CreateProjectFlow", () => {
  it("creates a fullstack project", async () => {
    const api = new ProjectCreationApi();
    const result = await api.createProject({
      rootPath: "/tmp/fullstack",
      presetId: "fullstack-react-api"
    });
    expect(result.success).toBe(true);
  });
});
