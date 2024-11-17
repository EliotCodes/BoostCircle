import 'dotenv/config';
import { Bot } from 'grammy';

const bot = new Bot(process.env.BOT_TOKEN as string);

bot.command("start", (ctx) => {
    ctx.reply("Hello World");
})

bot.start();

