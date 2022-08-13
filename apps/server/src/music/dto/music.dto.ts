import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class AddMusicFromUrlArgs {
    @Field()
    url!: string;

    @Field(() => Int)
    playlistId!: number;
}

@ArgsType()
export class removeMusicFromPlaylistArgs {
    @Field(() => Int)
    playlistId!: number;

    @Field()
    musicId!: string;
}
