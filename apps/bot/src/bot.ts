import { AppVersion } from "@waifu-bot/constants";

import { Cocoa, ConsoleManager, LogStatus, checkLogin } from "cocoa-discord";
import { MessageCenter } from "cocoa-discord/message";
import { SlashCenter } from "cocoa-discord/slash";
import { CocoaIntent } from "cocoa-discord/template";

import { TTS } from "@cocoa-discord/music-module";

import { Client } from "discord.js";

import chalk from "chalk";

import { Main as MainMessage } from "./commands/main.message.js";
import { Main as MainSlash } from "./commands/main.slash.js";
import { Music } from "./commands/music.slash.js";
import { Shitpost } from "./commands/shitpost.slash.js";
import { WebService } from "./commands/web.slash.js";
import { ActivityManager } from "./data/activity.js";
import { ensureData, getStyle, getWaifuData } from "./data/waifu.js";
import { GuildIds, environment } from "./environment.js";

await ensureData();

export const client = new Client(
  new CocoaIntent()
    .useGuild()
    .useGuildMessage()
    .useGuildVoice()
    .useDirectMessage()
    .useReadMessage(),
);

const mcenter = new MessageCenter(client, { prefixes: ["simp"] });
mcenter.addModules(new MainMessage());
mcenter.useHelpCommand(getStyle());
mcenter.on("error", async (name, err, msg) => {
  Cocoa.log(
    `Command "${name}" error at ${msg.guild?.name} : ${err}`,
    LogStatus.Error,
  );
  await msg.reply(`あら？, Error Occured: ${err}`.slice(0, 2000));
});

const scenter = new SlashCenter(client, GuildIds);
export const musicClient = new Music(client);
scenter.addModules(
  new MainSlash(),
  new Shitpost(),
  musicClient,
  new TTS(environment.SPEECH_KEY, environment.SPEECH_REGION, getStyle()),
  new WebService(),
);
scenter.useHelpCommand(getStyle());
scenter.on("error", async (name, err, ctx) => {
  Cocoa.log(
    `Command "${name}" error at ${ctx.guild?.name} : ${err}`,
    LogStatus.Error,
  );
  await ctx.channel?.send(`あら？, Error Occured: ${err}`.slice(0, 2000));
});
scenter.on("interaction", (name, ctx) => {
  Cocoa.log(
    `Handled "${name}" invoked by ${ctx.user.tag} at ${ctx.guild?.name}`,
  );
});

export const activityManager = new ActivityManager(client);

client.on("ready", async (cli) => {
  console.log(
    chalk.cyan(
      `${getWaifuData().shortNameJa} Ready! Logged in as ${
        cli.user.tag
      } v${AppVersion}, took ${process.uptime().toFixed(3)} seconds`,
    ),
  );
  scenter.syncCommands();
});

new ConsoleManager().useLogout(client);

checkLogin(client, environment.DISCORD_TOKEN);

process.on("SIGINT", async () => {
  console.log(chalk.yellow("Terminating Waifu Bot..."));
  await client.destroy();
});
