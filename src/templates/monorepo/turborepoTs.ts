import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const turborepoTs: TemplateDescriptor = {
  id: "turborepo-ts",
  name: "Turborepo TypeScript Monorepo",
  category: "monorepo",
  folders: ["apps/web", "apps/api", "packages/ui"],
  files: [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: "projectforge-turborepo",
          private: true,
          scripts: {
            dev: "turbo run dev",
            build: "turbo run build"
          },
          devDependencies: {
            turbo: "^2.0.0",
            typescript: "^5.4.0"
          },
          workspaces: ["apps/*", "packages/*"]
        },
        null,
        2
      )
    },
    {
      path: "turbo.json",
      content: JSON.stringify(
        {
          pipeline: {
            dev: { cache: false },
            build: {}
          }
        },
        null,
        2
      )
    },
    {
      path: "apps/web/package.json",
      content: JSON.stringify(
        {
          name: "web",
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
      path: "apps/api/package.json",
      content: JSON.stringify(
        {
          name: "api",
          private: true,
          scripts: {
            dev: "ts-node-dev --respawn --transpile-only src/server.ts",
            build: "tsc"
          },
          dependencies: {
            express: "^4.19.0"
          },
          devDependencies: {
            typescript: "^5.4.0",
            "ts-node-dev": "^2.0.0",
            "@types/express": "^4.17.21"
          }
        },
        null,
        2
      )
    },
    {
      path: "apps/api/src/server.ts",
      content: `import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "ProjectForge Turborepo API" });
});

app.listen(port, () => {
  console.log(\`API listening on port \${port}\`);
});
`
    }
  ]
};
