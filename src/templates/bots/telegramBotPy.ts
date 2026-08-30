import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const telegramBotPy: TemplateDescriptor = {
  id: "telegram-bot-py",
  name: "Telegram Bot (Python)",
  category: "bots",
  folders: ["bot"],
  files: [
    {
      path: "requirements.txt",
      content: `python-telegram-bot==21.0.0
`
    },
    {
      path: "bot/main.py",
      content: `from telegram.ext import ApplicationBuilder, CommandHandler
import os

TOKEN = os.getenv("TELEGRAM_TOKEN", "your-token-here")

async def start(update, context):
    await update.message.reply_text("ProjectForge Telegram bot ready.")

def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

if __name__ == "__main__":
    main()
`
    },
    {
      path: ".env.example",
      content: `TELEGRAM_TOKEN=your-telegram-bot-token-here
`
    }
  ]
};
