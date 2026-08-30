import { FileSystem } from "./fileSystem";
import { TemplateDescriptor } from "../domain/models/TemplateDescriptor";

export class TemplateEngine {
  private fs = new FileSystem();

  async applyTemplate(id: string, rootPath: string) {
    // In real code, load template by id
    const template: TemplateDescriptor = {
      id,
      name: id,
      category: "web",
      files: [],
      folders: []
    };

    for (const folder of template.folders) {
      await this.fs.ensureFolder(`${rootPath}/${folder}`);
    }

    for (const file of template.files) {
      await this.fs.writeFile(`${rootPath}/${file.path}`, file.content);
    }

    return { success: true, details: { templateId: id } };
  }

  async applyStackTemplates(
    templates: TemplateDescriptor[],
    rootPath: string,
    _analysis: unknown
  ) {
    for (const t of templates) {
      await this.applyTemplate(t.id, rootPath);
    }
    return { success: true, details: { count: templates.length } };
  }
}
