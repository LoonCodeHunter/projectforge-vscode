import * as webTemplates from "../../src/templates/web";
import * as backendTemplates from "../../src/templates/backend";

export class TemplateRegistry {
  getTemplatesForStack(stack: unknown) {
    // Placeholder: map stack to actual template modules
    return Object.values({ ...webTemplates, ...backendTemplates });
  }
}
