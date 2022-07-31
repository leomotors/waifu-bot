import { CogSlashClass, SlashCommand } from "cocoa-discord-utils/slash/class";

import { gqlSdk, PublicWebUrl } from "../graphql";
import { updateUser } from "../graphql/hooks";

export class Web extends CogSlashClass {
    constructor() {
        super("Web", "Cog that interacts with Website");
    }

    @SlashCommand(
        "Grants you access to website, will revoke earlier access token"
    )
    async login(ctx: SlashCommand.Context) {
        await ctx.deferReply({ ephemeral: true });

        await updateUser(ctx);

        const res = await gqlSdk.generateToken({
            where: { id: ctx.user.id },
        });
        const token = res.generateToken.token;

        await ctx.followUp(
            `You can access website at ${PublicWebUrl}/login?token=${token}`
        );
    }
}
