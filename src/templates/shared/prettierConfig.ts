import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const prettierConfig: TemplateDescriptor = {
  id: "shared-prettier-config",
  name: "Shared Prettier Config",
  category: "shared",
  folders: [],
  files: [
    {
      path: ".prettierrc",
      content: JSON.stringify(
        {
          semi: true,
          singleQuote: true,
          trailingComma: "es5"
        },
        null,
        2
      )
    }
  ]
};
