import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistUpdateWithoutMusicInput } from './playlist-update-without-music.input';

@InputType()
export class PlaylistUpdateWithWhereUniqueWithoutMusicInput {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistUpdateWithoutMusicInput, {nullable:false})
    @Type(() => PlaylistUpdateWithoutMusicInput)
    data!: PlaylistUpdateWithoutMusicInput;
}
