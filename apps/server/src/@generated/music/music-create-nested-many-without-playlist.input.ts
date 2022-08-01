import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicCreateWithoutPlaylistInput } from './music-create-without-playlist.input';
import { Type } from 'class-transformer';
import { MusicCreateOrConnectWithoutPlaylistInput } from './music-create-or-connect-without-playlist.input';
import { MusicWhereUniqueInput } from './music-where-unique.input';

@InputType()
export class MusicCreateNestedManyWithoutPlaylistInput {

    @Field(() => [MusicCreateWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicCreateWithoutPlaylistInput)
    create?: Array<MusicCreateWithoutPlaylistInput>;

    @Field(() => [MusicCreateOrConnectWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicCreateOrConnectWithoutPlaylistInput)
    connectOrCreate?: Array<MusicCreateOrConnectWithoutPlaylistInput>;

    @Field(() => [MusicWhereUniqueInput], {nullable:true})
    @Type(() => MusicWhereUniqueInput)
    connect?: Array<MusicWhereUniqueInput>;
}
