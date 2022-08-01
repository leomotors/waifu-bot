import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicCreateWithoutPlaylistInput } from './music-create-without-playlist.input';
import { Type } from 'class-transformer';
import { MusicCreateOrConnectWithoutPlaylistInput } from './music-create-or-connect-without-playlist.input';
import { MusicUpsertWithWhereUniqueWithoutPlaylistInput } from './music-upsert-with-where-unique-without-playlist.input';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { MusicUpdateWithWhereUniqueWithoutPlaylistInput } from './music-update-with-where-unique-without-playlist.input';
import { MusicUpdateManyWithWhereWithoutPlaylistInput } from './music-update-many-with-where-without-playlist.input';
import { MusicScalarWhereInput } from './music-scalar-where.input';

@InputType()
export class MusicUpdateManyWithoutPlaylistNestedInput {

    @Field(() => [MusicCreateWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicCreateWithoutPlaylistInput)
    create?: Array<MusicCreateWithoutPlaylistInput>;

    @Field(() => [MusicCreateOrConnectWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicCreateOrConnectWithoutPlaylistInput)
    connectOrCreate?: Array<MusicCreateOrConnectWithoutPlaylistInput>;

    @Field(() => [MusicUpsertWithWhereUniqueWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicUpsertWithWhereUniqueWithoutPlaylistInput)
    upsert?: Array<MusicUpsertWithWhereUniqueWithoutPlaylistInput>;

    @Field(() => [MusicWhereUniqueInput], {nullable:true})
    @Type(() => MusicWhereUniqueInput)
    set?: Array<MusicWhereUniqueInput>;

    @Field(() => [MusicWhereUniqueInput], {nullable:true})
    @Type(() => MusicWhereUniqueInput)
    disconnect?: Array<MusicWhereUniqueInput>;

    @Field(() => [MusicWhereUniqueInput], {nullable:true})
    @Type(() => MusicWhereUniqueInput)
    delete?: Array<MusicWhereUniqueInput>;

    @Field(() => [MusicWhereUniqueInput], {nullable:true})
    @Type(() => MusicWhereUniqueInput)
    connect?: Array<MusicWhereUniqueInput>;

    @Field(() => [MusicUpdateWithWhereUniqueWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicUpdateWithWhereUniqueWithoutPlaylistInput)
    update?: Array<MusicUpdateWithWhereUniqueWithoutPlaylistInput>;

    @Field(() => [MusicUpdateManyWithWhereWithoutPlaylistInput], {nullable:true})
    @Type(() => MusicUpdateManyWithWhereWithoutPlaylistInput)
    updateMany?: Array<MusicUpdateManyWithWhereWithoutPlaylistInput>;

    @Field(() => [MusicScalarWhereInput], {nullable:true})
    @Type(() => MusicScalarWhereInput)
    deleteMany?: Array<MusicScalarWhereInput>;
}
