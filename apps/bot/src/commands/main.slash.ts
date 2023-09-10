import { AppVersion } from "@waifu-bot/constants";

import { CocoaVersion } from "cocoa-discord-utils/meta";
import {
  CogSlashClass,
  Param,
  SlashCommand,
} from "cocoa-discord-utils/slash/class";
import { getStatusFields } from "cocoa-discord-utils/template";

import { Version as MusicVersion } from "@leomotors/music-bot";

import { TextChannel } from "discord.js";

import { environment } from "../environment.js";

import { HelixError, formatTime, makeHelix } from "./main.service.js";
import { Waifu, style } from "./styles.js";

export class Main extends CogSlashClass {
  timePinged = 0;

  constructor() {
    super("Main", "Main Slash Cog");
  }

  readonly fbiStyle = style.extends({ author: "bot" });

  @SlashCommand("Get Selected User Information")
  async fbi(
    ctx: SlashCommand.Context,
    @Param.User("Target User") user: Param.User.Type,
  ) {
    const gmember = ctx.guild?.members.cache.get(user.id);

    const emb = this.fbiStyle
      .use(ctx)
      .setTitle(user.tag)
      .setDescription(`ID: ${user.id}${user.bot ? "\n🤖Beep Boop🤖" : ""}`)
      .setThumbnail(user.avatarURL() ?? user.defaultAvatarURL)
      .addField({
        name: "Created At",
        value: formatTime(user.createdTimestamp),
      });

    if (gmember?.joinedTimestamp) {
      emb.addField({
        name: "Joined At",
        value: formatTime(gmember.joinedTimestamp),
      });
    }

    await ctx.reply({ embeds: [emb] });
  }

  @SlashCommand("Create Golden Frame")
  async goldenframe(
    ctx: SlashCommand.Context,
    @Param.Choices<Param.String.Type>(async () => {
      const res = (await fetch(environment.GOLDEN_FRAME_ENDPOINT, {
        headers: {
          Authorization: environment.GOLDEN_FRAME_APIKEY,
        },
      }).then((r) => r.json())) as Array<{ name: string; description: string }>;

      return res.map((e) => ({ name: e.name, value: e.name }));
    })
    @Param.String("Frame Name")
    frame: Param.String.Type,
    @Param.User("Who to put in the golden frame", { required: false })
    who: Param.User.Nullable,
    @Param.Attachment("Image to put in the frame", { required: false })
    img: Param.Attachment.Nullable,
  ) {
    if (!who && !img) {
      await ctx.reply("Either user or image must be given!");
      return;
    }

    await ctx.deferReply();

    let url: string | null;
    if (who) {
      url = who.avatarURL({ size: 4096, forceStatic: true });
      if (!url) {
        await ctx.followUp(
          "Golden Frame Failed: Target user has no profile picture!",
        );
        return;
      }
    } else {
      url = img!.url;
    }

    const res = await fetch(url);

    const contentType = res.headers.get("Content-Type");
    // Allow only static images
    const allowedContentTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedContentTypes.includes(contentType!)) {
      await ctx.followUp(
        `Fetch Error: Content-Type of ${contentType} is invalid!`,
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", await res.blob());
    formData.append("frame_name", frame);

    const buildRes = await fetch(environment.GOLDEN_FRAME_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: environment.GOLDEN_FRAME_APIKEY,
      },
      body: formData,
    });

    if (!buildRes.body) {
      await ctx.followUp("Fetch Error: Cannot get golden frame");
      return;
    }

    const imageArrayBuffer = await buildRes.arrayBuffer();

    await ctx.followUp({ files: [Buffer.from(imageArrayBuffer)] });
  }

  @SlashCommand("Adenine Thymine Cytosine Guanine")
  async helix(
    ctx: SlashCommand.Context,
    @Param.String("Text to Helix-ify") text: Param.String.Type,
  ) {
    const res = makeHelix(text);

    if (res === HelixError.ILLEGAL_CHAR) {
      await ctx.reply("Illegal String!");
      return;
    } else if (res === HelixError.ILLEGAL_LEN) {
      await ctx.reply("Please don't try to make me, I have family!");
      return;
    }

    await ctx.reply("Helix時間で～す！");
    for (const helix of res) {
      await ctx.channel?.send(helix);
    }
  }

  @SlashCommand("Use this bot to speak anything")
  async imposter(
    ctx: SlashCommand.Context,
    @Param.String("Message for this bot to Speak")
    message: Param.String.Type,
  ) {
    if (ctx.channel) {
      await ctx.reply({ content: "サプライズ成功!", ephemeral: true });
      await ctx.channel.send(`${message}`);
    } else {
      await ctx.reply({
        content: "サプライズ成功な～い!",
        ephemeral: true,
      });
    }
  }

  @SlashCommand("Clear Messages to delete what you have done")
  async kamui(
    ctx: SlashCommand.Context,
    @Param.Integer("Amount to *kamui*") amount: Param.Integer.Type,
  ) {
    if (ctx.channel instanceof TextChannel) {
      await ctx.reply("**ザ・ハンドが消す!!!**");
      await ctx.channel.bulkDelete(amount + 1);

      await ctx.channel.send(`ザ・ハンドが**${amount}メッセージ**を消した!!!`);
      await ctx.channel.send(
        "https://c.tenor.com/xexSk5SQBbAAAAAC/discord-mod.gif",
      );
    } else await ctx.reply("bruh, this doesn't work here");
  }

  @SlashCommand("Get profile picture of someone")
  async pfp(
    ctx: SlashCommand.Context,
    @Param.User("That person") person: Param.User.Type,
  ) {
    await ctx.reply(
      person.avatarURL({ size: 4096, extension: "png" }) ?? "bruh, no avatar",
    );
  }

  @SlashCommand("Pong Tai!")
  async ping(
    ctx: SlashCommand.Context,
    @Param.Ephemeral ephemeral: Param.Ephemeral.Type,
  ) {
    this.timePinged++;

    const emb = style
      .use(ctx)
      .setTitle("Pong! Tai")
      .addField({
        name: "Pinged since start",
        value: `${this.timePinged}`,
      })
      .setDescription(`Ping = ${ctx.client.ws.ping} ms`);

    await ctx.reply({ embeds: [emb], ephemeral: ephemeral ?? false });
  }

  @SlashCommand("A Good Way to SIMP (Powered by Tenor)")
  async simp(
    ctx: SlashCommand.Context,
    @Param.String("Who to SIMP") waifu_name: Param.String.Type,
    @Param.Boolean("SIMP without anyone knowing", { required: false })
    quiet_simp: Param.Boolean.Type,
  ) {
    const res = await fetch(
      `https://g.tenor.com/v1/search?q=${waifu_name}&key=${environment.TENOR_APIKEY}&limit=20`,
    );
    const results = ((await res.json()) as { results: unknown[] }).results;

    const randomed = results[Math.floor(Math.random() * results.length)] as {
      media: { gif: { url: string } }[];
    };

    await ctx.reply({
      content: `${randomed.media[0]!.gif.url}`,
      ephemeral: quiet_simp,
    });
  }

  @SlashCommand("Asking the bot if they are fine")
  async status(
    ctx: SlashCommand.Context,
    @Param.Ephemeral ephemeral: Param.Ephemeral.Type,
  ) {
    const emb = style
      .use(ctx)
      .setTitle(`${Waifu.name}'s Status`)
      .setDescription(
        `Waifu Bot Version: ${AppVersion}\nCocoa Utils Version: ${CocoaVersion}\n@leomotors/music-bot Version: ${MusicVersion}`,
      )
      .addFields(await getStatusFields(ctx))
      .setFooter({
        text: "Bot made by Leomotors with ❤️❤️❤️",
      });

    await ctx.reply({ embeds: [emb], ephemeral: ephemeral ?? false });
  }
}
