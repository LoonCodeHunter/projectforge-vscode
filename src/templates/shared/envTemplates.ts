import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const envTemplates: TemplateDescriptor = {
  id: "shared-env-templates",
  name: "Shared Env Templates",
  category: "shared",
  folders: [],
  files: [
    {
      path: ".env.example",
      content: `NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000
`
    }
  ]
};
