import {
  CogSlashClass,
  Param,
  SlashCommand,
} from "cocoa-discord-utils/slash/class";

export class Shitpost extends CogSlashClass {
  constructor() {
    super("Shitpost", "Cog for shitpost useless command");
  }

  @SlashCommand("😭😭😭")
  async cunny(ctx: SlashCommand.Context) {
    await ctx.reply("||https://www.youtube.com/watch?v=HVXkeDSNdYM||");
  }

  @SlashCommand("Insult someone for being gae")
  async gay(
    ctx: SlashCommand.Context,
    @Param.User("who are gay", { required: false }) gay: Param.User.Nullable,
  ) {
    const who = gay ?? ctx.user;
    await ctx.reply(`<@${who.id}> is gay!`);
  }
}
