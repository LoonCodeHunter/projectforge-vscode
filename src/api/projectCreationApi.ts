import { TemplateEngine } from "../core/templateEngine";
import { StackRegistry } from "../domain/services/stackRegistry";
import { TemplateRegistry } from "../domain/services/templateRegistry";
import { ProjectAnalyzer } from "../domain/services/projectAnalyzer";

export interface CreateProjectOptions {
  rootPath: string;
  presetId?: string;
  stackId?: string;
}

export class ProjectCreationApi {
  private templateEngine = new TemplateEngine();
  private stackRegistry = new StackRegistry();
  private templateRegistry = new TemplateRegistry();
  private analyzer = new ProjectAnalyzer();

  async createProject(options: CreateProjectOptions) {
    const stack = options.stackId
      ? this.stackRegistry.getStackById(options.stackId)
      : this.stackRegistry.getDefaultStack();

    const templates = this.templateRegistry.getTemplatesForStack(stack);
    const analysis = await this.analyzer.analyzeTarget(options.rootPath);

    const result = await this.templateEngine.applyStackTemplates(
      templates,
      options.rootPath,
      analysis
    );

    return { success: result.success, details: result.details };
  }
}
