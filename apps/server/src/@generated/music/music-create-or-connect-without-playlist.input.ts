import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Type } from 'class-transformer';
import { MusicCreateWithoutPlaylistInput } from './music-create-without-playlist.input';

@InputType()
export class MusicCreateOrConnectWithoutPlaylistInput {

    @Field(() => MusicWhereUniqueInput, {nullable:false})
    @Type(() => MusicWhereUniqueInput)
    where!: MusicWhereUniqueInput;

    @Field(() => MusicCreateWithoutPlaylistInput, {nullable:false})
    @Type(() => MusicCreateWithoutPlaylistInput)
    create!: MusicCreateWithoutPlaylistInput;
}
