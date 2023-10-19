import { UserRole, prisma } from "@waifu-bot/database";

import { SlashCommand, SlashModuleClass } from "cocoa-discord/slash/class";

import { environment } from "../environment.js";

export class WebService extends SlashModuleClass {
  constructor() {
    super("Web Service", "Related to website");
  }

  @SlashCommand("Get ticket to login to website")
  async login(ctx: SlashCommand.Context) {
    await ctx.deferReply({ ephemeral: true });

    const user = ctx.user;

    const ticket = await prisma.ticket.create({
      data: {
        user: {
          connectOrCreate: {
            where: {
              id: user.id,
            },
            create: {
              id: user.id,
              name: user.username,
              avatarUrl: user.displayAvatarURL({ size: 4096 }),
              role: UserRole.USER,
            },
          },
        },
      },
    });

    await ctx.followUp({
      content: `Login at ${environment.WEB_PUBLIC_URL}/login?ticket=${ticket.ticketId}. The ticket expires in 10 minutes.`,
    });
  }
}
