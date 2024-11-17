import { Bot } from 'grammy';
import { config } from './config';

const bot = new Bot(config.bot_token);

bot.command("start", (ctx) => {
    ctx.reply("Hello World");
})

bot.start();

