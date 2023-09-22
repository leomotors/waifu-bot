import { AppVersion, ShortNameJA } from "@waifu-bot/constants";

import {
  ActivityGroupLoader,
  ActivityManager,
  Cocoa,
  ConsoleManager,
  LogStatus,
  checkLogin,
} from "cocoa-discord";
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
import { style } from "./commands/styles.js";
import { GuildIds, environment } from "./environment.js";

const client = new Client(
  new CocoaIntent()
    .useGuild()
    .useGuildMessage()
    .useGuildVoice()
    .useDirectMessage()
    .useReadMessage(),
);

const mcenter = new MessageCenter(client, { prefixes: ["simp"] });
mcenter.addModules(new MainMessage());
mcenter.useHelpCommand(style);
mcenter.on("error", async (name, err, msg) => {
  Cocoa.log(
    `Command "${name}" error at ${msg.guild?.name} : ${err}`,
    LogStatus.Error,
  );
  await msg.reply(`あら？, Error Occured: ${err}`.slice(0, 2000));
});

const scenter = new SlashCenter(client, GuildIds);
scenter.addModules(
  new MainSlash(),
  new Shitpost(),
  new Music(client),
  new TTS(environment.SPEECH_KEY, environment.SPEECH_REGION, style),
);
scenter.useHelpCommand(style);
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

const activityLoader = new ActivityGroupLoader("data/activities.json");
const activityManager = new ActivityManager(
  activityLoader,
  client,
  5 * 60 * 1000,
);

client.on("ready", (cli) => {
  console.log(
    chalk.cyan(
      `${ShortNameJA} Ready! Logged in as ${
        cli.user.tag
      } v${AppVersion}, took ${process.uptime().toFixed(3)} seconds`,
    ),
  );
  scenter.syncCommands();
  activityManager.nextActivity();
});

new ConsoleManager().useLogout(client).useReload(activityLoader);

checkLogin(client, environment.DISCORD_TOKEN);

process.on("SIGINT", () => {
  console.log(chalk.yellow("Terminating Waifu Bot..."));
  client.destroy();
});
