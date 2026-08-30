import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const eslintConfig: TemplateDescriptor = {
  id: "shared-eslint-config",
  name: "Shared ESLint Config",
  category: "shared",
  folders: [],
  files: [
    {
      path: ".eslintrc.json",
      content: JSON.stringify(
        {
          env: { node: true, es2020: true },
          extends: ["eslint:recommended"],
          parserOptions: { ecmaVersion: 2020, sourceType: "module" }
        },
        null,
        2
      )
    }
  ]
};
