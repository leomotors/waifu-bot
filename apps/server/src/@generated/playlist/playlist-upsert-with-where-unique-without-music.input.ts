import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistUpdateWithoutMusicInput } from './playlist-update-without-music.input';
import { PlaylistCreateWithoutMusicInput } from './playlist-create-without-music.input';

@InputType()
export class PlaylistUpsertWithWhereUniqueWithoutMusicInput {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistUpdateWithoutMusicInput, {nullable:false})
    @Type(() => PlaylistUpdateWithoutMusicInput)
    update!: PlaylistUpdateWithoutMusicInput;

    @Field(() => PlaylistCreateWithoutMusicInput, {nullable:false})
    @Type(() => PlaylistCreateWithoutMusicInput)
    create!: PlaylistCreateWithoutMusicInput;
}
