import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistCreateWithoutMusicInput } from './playlist-create-without-music.input';

@InputType()
export class PlaylistCreateOrConnectWithoutMusicInput {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistCreateWithoutMusicInput, {nullable:false})
    @Type(() => PlaylistCreateWithoutMusicInput)
    create!: PlaylistCreateWithoutMusicInput;
}
