import { Module } from "@nestjs/common";

import { PlaylistResolver } from "./playlist.resolver";
import { PlaylistService } from "./playlist.service";

@Module({
    providers: [PlaylistResolver, PlaylistService],
})
export class PlaylistModule {}
