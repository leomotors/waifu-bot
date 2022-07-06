import {
    CogSlashClass,
    Param,
    SlashCommand,
} from "cocoa-discord-utils/slash/class";

import { Voice } from "./tts.service";

export class TTS extends CogSlashClass {
    constructor() {
        super("TTS", "Harunon can speak!");
    }

    @SlashCommand("Speak!")
    async speak(
        ctx: SlashCommand.Context,
        @Param.String("What to speak") text: Param.String.Type,
        @Param.String("Language", { required: false })
        lang: Param.String.Nullable
    ) {
        await ctx.reply("わかります！");

        await Voice.joinFromContext(ctx);
        Voice.speak(ctx.guildId!, text, lang);
    }
}
