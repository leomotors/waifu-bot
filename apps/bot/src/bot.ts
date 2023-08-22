import "./dotenv.js";

import { AppVersion, ShortNameJA } from "@waifu-bot/constants";

import {
  ActivityGroupLoader,
  ActivityManager,
  Cocoa,
  ConsoleManager,
  LogStatus,
  checkLogin,
} from "cocoa-discord-utils";
import { MessageCenter } from "cocoa-discord-utils/message";
import { SlashCenter } from "cocoa-discord-utils/slash";
import { CocoaIntent } from "cocoa-discord-utils/template";

import { Client } from "discord.js";

import chalk from "chalk";

import { Kashi } from "./commands/kashi.slash.js";
import { TTS } from "./commands/legacy/tts.slash.js";
import { Main as MainMessage } from "./commands/main.message.js";
import { Main as MainSlash } from "./commands/main.slash.js";
import { Music } from "./commands/music.slash.js";
import { Shitpost } from "./commands/shitpost.slash.js";
import { style } from "./commands/styles.js";
import { GuildIds } from "./environment.js";

const client = new Client(
  new CocoaIntent()
    .useGuildMessage()
    .useGuildSlash()
    .useGuildVoice()
    .useDirectMessage()
    .useReadMessage()
);

const mcenter = new MessageCenter(client, { prefixes: ["simp"] });
mcenter.addCogs(new MainMessage());
mcenter.useHelpCommand(style);
mcenter.on("error", async (name, err, msg) => {
  Cocoa.log(
    `Command "${name}" error at ${msg.guild?.name} : ${err}`,
    LogStatus.Error
  );
  await msg.reply(`あら？, Error Occured: ${err}`.slice(0, 2000));
});

const scenter = new SlashCenter(client, GuildIds);
scenter.addCogs(
  new MainSlash(),
  new Shitpost(),
  new Kashi(),
  new Music(client),
  new TTS()
);
scenter.useHelpCommand(style);
scenter.on("error", async (name, err, ctx) => {
  Cocoa.log(
    `Command "${name}" error at ${ctx.guild?.name} : ${err}`,
    LogStatus.Error
  );
  await ctx.channel?.send(`あら？, Error Occured: ${err}`.slice(0, 2000));
});
scenter.on("interaction", (name, ctx) => {
  Cocoa.log(
    `Handled "${name}" invoked by ${ctx.user.tag} at ${ctx.guild?.name}`
  );
});

const activityLoader = new ActivityGroupLoader("data/activities.json");
const activityManager = new ActivityManager(
  activityLoader,
  client,
  5 * 60 * 1000
);

client.on("ready", (cli) => {
  console.log(
    chalk.cyan(
      `${ShortNameJA} Ready! Logged in as ${
        cli.user.tag
      } v${AppVersion}, took ${process.uptime().toFixed(3)} seconds`
    )
  );
  scenter.syncCommands(true);
  activityManager.nextActivity();
});

new ConsoleManager().useLogout(client).useReload(activityLoader);

checkLogin(client, process.env.DISCORD_TOKEN);

process.on("SIGINT", () => {
  console.log(chalk.yellow("Terminating Waifu Bot..."));
  client.destroy();
});
