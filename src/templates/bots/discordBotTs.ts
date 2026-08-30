import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const discordBotTs: TemplateDescriptor = {
  id: "discord-bot-ts",
  name: "Discord Bot (TypeScript)",
  category: "bots",
  folders: ["src"],
  files: [
    {
      path: "package.json",
      content: JSON.stringify(
        {
          name: "discord-bot-ts",
          private: true,
          scripts: {
            dev: "ts-node-dev --respawn --transpile-only src/index.ts",
            build: "tsc",
            start: "node dist/index.js"
          },
          dependencies: {
            "discord.js": "^14.15.0",
            dotenv: "^16.4.0"
          },
          devDependencies: {
            typescript: "^5.4.0",
            "ts-node-dev": "^2.0.0",
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
      path: ".env.example",
      content: `DISCORD_TOKEN=your-bot-token-here
DISCORD_CLIENT_ID=your-client-id-here
`
    },
    {
      path: "src/index.ts",
      content: `import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once("ready", () => {
  console.log("ProjectForge Discord bot ready.");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong from ProjectForge!");
  }
});

client.login(process.env.DISCORD_TOKEN);
`
    }
  ]
};
