import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const expressTsApi: TemplateDescriptor = {
  id: "express-ts-api",
  name: "Express TypeScript API",
  category: "backend",
  folders: [
    "src",
    "src/config",
    "src/controllers",
    "src/routes",
    "src/middlewares",
    "src/services",
    "src/utils"
  ],
  files: [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: "express-ts-api",
          private: true,
          scripts: {
            dev: "ts-node-dev --respawn --transpile-only src/server.ts",
            build: "tsc",
            start: "node dist/server.js",
            lint: "eslint src --ext .ts"
          },
          dependencies: {
            express: "^4.19.0",
            dotenv: "^16.4.0"
          },
          devDependencies: {
            typescript: "^5.4.0",
            "ts-node-dev": "^2.0.0",
            "@types/express": "^4.17.21",
            "@types/node": "^20.0.0",
            eslint: "^9.0.0"
          }
        },
        null,
        2
      )
    },
    {
      path: "tsconfig.json",
      content: JSON.stringify(
        {
          compilerOptions: {
            target: "ES2020",
            module: "commonjs",
            strict: true,
            esModuleInterop: true,
            outDir: "dist",
            rootDir: "src",
            skipLibCheck: true
          },
          include: ["src"]
        },
        null,
        2
      )
    },
    {
      path: "src/server.ts",
      content: `import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(\`Express TS API listening on port \${port}\`);
});
`
    },
    {
      path: "src/app.ts",
      content: `import express from "express";
import { json } from "express";
import { registerRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

export const app = express();

app.use(json());
registerRoutes(app);
app.use(errorMiddleware);
`
    },
    {
      path: "src/routes/index.ts",
      content: `import { Express } from "express";
import { router as healthRouter } from "./healthRoutes";

export function registerRoutes(app: Express) {
  app.use("/health", healthRouter);
}
`
    },
    {
      path: "src/routes/healthRoutes.ts",
      content: `import { Router } from "express";

export const router = Router();

router.get("/", (_req, res) => {
  res.json({ status: "ok", service: "ProjectForge Express TS API" });
});
`
    },
    {
      path: "src/middlewares/errorMiddleware.ts",
      content: `import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
`
    },
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
