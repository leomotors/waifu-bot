import {
  MessageCommand,
  MessageModuleClass,
} from "cocoa-discord/message/class";

import { Message } from "discord.js";

import { style } from "./styles.js";

export class Main extends MessageModuleClass {
  timePinged = 0;

  constructor() {
    super("Main", "Main Message Cog");
  }

  @MessageCommand({
    description: "Insult someone for being gay",
  })
  async gay(msg: Message, strp: string) {
    const who =
      strp.split(" ").filter((s) => s.length > 0)[0] ?? `<@${msg.author.id}>`;

    await msg.channel.send(`${who} is gay!`);
  }

  @MessageCommand({
    aliases: ["ing"],
    description: "Pong Tai!",
  })
  async ping(msg: Message) {
    this.timePinged++;

    const emb = style
      .use(msg)
      .setTitle("Pong! Tai")
      .addFields({
        name: "Pinged since start",
        value: `${this.timePinged}`,
      })
      .setDescription(`Ping = ${msg.client.ws.ping} ms`);

    await msg.reply({ embeds: [emb] });
  }
}
