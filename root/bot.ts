import { Bot } from 'grammy';
import { config } from './config';
import startCommand from './commands/startCommand';

const bot = new Bot(config.bot_token);

bot.command("start", ctx => startCommand(ctx))

bot.start();

