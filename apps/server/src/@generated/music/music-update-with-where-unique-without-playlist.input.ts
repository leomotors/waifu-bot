import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Type } from 'class-transformer';
import { MusicUpdateWithoutPlaylistInput } from './music-update-without-playlist.input';

@InputType()
export class MusicUpdateWithWhereUniqueWithoutPlaylistInput {

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;

    @Field(() => MusicUpdateWithoutPlaylistInput, {nullable:false})
    @Type(() => MusicUpdateWithoutPlaylistInput)
    data!: MusicUpdateWithoutPlaylistInput;
}
