import { InlineKeyboard } from "grammy";

export default async function start(ctx: any): Promise<void> {
  const buttons = new InlineKeyboard().text("✅ Get Started", "get_started");
  ctx.reply(
    `Welcome ${ctx.from.first_name}, you can get free subscribers for your telegram channel by subscribing to other channels.\n\nIt's a sub-for-sub concept, click on /promote to boost your channel.`,
    { reply_markup: buttons }
  );
}


