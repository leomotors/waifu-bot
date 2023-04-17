import { ArrayLoader } from "cocoa-discord-utils";
import {
  CogSlashClass,
  Param,
  SlashCommand,
} from "cocoa-discord-utils/slash/class";

export class Shitpost extends CogSlashClass {
  readonly kitaLoader = ArrayLoader.fromFile<string>(
    "kitakita",
    "data/kitakita.json"
  );

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
    @Param.User("who are gay", { required: false }) gay: Param.User.Nullable
  ) {
    const who = gay ?? ctx.user;
    await ctx.reply(`<@${who.id}> is gay!`);
  }

  @SlashCommand(
    "kitakita post from บจจิเดอะร็อคแฟนคลับไทยแลนด์ คิตะคิต้าโพสต์ติ้ง ✨⭐"
  )
  async kitakita(ctx: SlashCommand.Context) {
    await this.kitaLoader.initialPromise;

    const url = this.kitaLoader.getRandom();

    if (!url) {
      await ctx.reply("No kitakita post for unknown reason 😭");
    } else {
      await ctx.reply(`キタ～ン キタ～ン\n${url}`);
    }
  }
}
