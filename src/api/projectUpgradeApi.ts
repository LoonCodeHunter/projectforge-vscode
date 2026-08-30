import { ProjectUpgradeEngine } from "../core/projectUpgradeEngine";
import { ProjectAnalyzer } from "../domain/services/projectAnalyzer";

export class ProjectUpgradeApi {
  private upgradeEngine = new ProjectUpgradeEngine();
  private analyzer = new ProjectAnalyzer();

  async upgradeProject(rootPath: string) {
    const analysis = await this.analyzer.analyzeTarget(rootPath);
    const result = await this.upgradeEngine.upgrade(analysis);
    return { success: result.success, changes: result.changes };
  }
}
