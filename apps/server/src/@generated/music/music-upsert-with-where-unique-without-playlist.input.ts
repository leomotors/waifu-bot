import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Type } from 'class-transformer';
import { MusicUpdateWithoutPlaylistInput } from './music-update-without-playlist.input';
import { MusicCreateWithoutPlaylistInput } from './music-create-without-playlist.input';

@InputType()
export class MusicUpsertWithWhereUniqueWithoutPlaylistInput {

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;

    @Field(() => MusicUpdateWithoutPlaylistInput, {nullable:false})
    @Type(() => MusicUpdateWithoutPlaylistInput)
    update!: MusicUpdateWithoutPlaylistInput;

    @Field(() => MusicCreateWithoutPlaylistInput, {nullable:false})
    @Type(() => MusicCreateWithoutPlaylistInput)
    create!: MusicCreateWithoutPlaylistInput;
}
