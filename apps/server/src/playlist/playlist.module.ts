import { Module } from "@nestjs/common";

import { PlaylistAdapter } from "./playlist.adapter";
import { PlaylistResolver } from "./playlist.resolver";
import { PlaylistService } from "./playlist.service";

@Module({
    providers: [PlaylistResolver, PlaylistService, PlaylistAdapter],
})
export class PlaylistModule {}
