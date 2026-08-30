import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const nestJsApi: TemplateDescriptor = {
  id: "nestjs-api",
  name: "NestJS TypeScript API",
  category: "backend",
  folders: ["src"],
  files: [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: "nestjs-api",
          private: true,
          scripts: {
            start: "nest start",
            start:dev: "nest start --watch",
            build: "nest build"
          },
          dependencies: {
            "@nestjs/common": "^10.0.0",
            "@nestjs/core": "^10.0.0",
            "@nestjs/platform-express": "^10.0.0",
            reflect-metadata: "^0.1.13",
            rxjs: "^7.8.0"
          },
          devDependencies: {
            "@nestjs/cli": "^10.0.0",
            typescript: "^5.4.0",
            "@types/node": "^20.0.0"
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
            module: "commonjs",
            target: "ES2020",
            strict: true,
            esModuleInterop: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            outDir: "dist"
          },
          include: ["src"]
        },
        null,
        2
      )
    },
    {
      path: "src/main.ts",
      content: `import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
`
    },
    {
      path: "src/app.module.ts",
      content: `import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  controllers: [AppController],
  providers: []
})
export class AppModule {}
`
    },
    {
      path: "src/app.controller.ts",
      content: `import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("health")
  health() {
    return { status: "ok", service: "ProjectForge NestJS API" };
  }
}
`
    }
  ]
};
