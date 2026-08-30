import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const pnpmWorkspacesMultiApp: TemplateDescriptor = {
  id: "pnpm-workspaces-multi-app",
  name: "pnpm Workspaces Multi-App",
  category: "monorepo",
  folders: ["apps/app1", "apps/app2", "packages/shared"],
  files: [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: "projectforge-pnpm-workspaces",
          private: true,
          scripts: {
            dev: "pnpm -r dev",
            build: "pnpm -r build"
          }
        },
        null,
        2
      )
    },
    {
      path: "pnpm-workspace.yaml",
      content: `packages:
  - "apps/*"
  - "packages/*"
`
    },
    {
      path: "apps/app1/package.json",
      content: JSON.stringify(
        {
          name: "app1",
          private: true,
          scripts: {
            dev: "vite",
            build: "vite build"
          },
          dependencies: {
            react: "^18.3.0",
            "react-dom": "^18.3.0"
          },
          devDependencies: {
            vite: "^5.0.0",
            "@vitejs/plugin-react-swc": "^4.0.0",
            typescript: "^5.4.0"
          }
        },
        null,
        2
      )
    },
    {
      path: "apps/app2/package.json",
      content: JSON.stringify(
        {
          name: "app2",
          private: true,
          scripts: {
            dev: "vite",
            build: "vite build"
          },
          dependencies: {
            react: "^18.3.0",
            "react-dom": "^18.3.0"
          },
          devDependencies: {
            vite: "^5.0.0",
            "@vitejs/plugin-react-swc": "^4.0.0",
            typescript: "^5.4.0"
          }
        },
        null,
        2
      )
    }
  ]
};
