import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

if (!process.env.BOT_TOKEN) throw new Error("Bot token is not set in the enviroment variable");

export const config = {
    bot_token: process.env.BOT_TOKEN,
} 