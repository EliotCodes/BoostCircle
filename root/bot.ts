import { Bot } from 'grammy';
import { config } from './config';

import startCommand from './commands/startCommand';
import getStarted from './callbacks/getStartedCallback';

const bot = new Bot(config.bot_token);

bot.command("start", ctx => startCommand(ctx));
bot.callbackQuery("get_started", ctx => getStarted(ctx));

bot.start();

