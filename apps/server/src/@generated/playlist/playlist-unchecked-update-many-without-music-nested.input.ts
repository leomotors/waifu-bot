import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistCreateWithoutMusicInput } from './playlist-create-without-music.input';
import { Type } from 'class-transformer';
import { PlaylistCreateOrConnectWithoutMusicInput } from './playlist-create-or-connect-without-music.input';
import { PlaylistUpsertWithWhereUniqueWithoutMusicInput } from './playlist-upsert-with-where-unique-without-music.input';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { PlaylistUpdateWithWhereUniqueWithoutMusicInput } from './playlist-update-with-where-unique-without-music.input';
import { PlaylistUpdateManyWithWhereWithoutMusicInput } from './playlist-update-many-with-where-without-music.input';
import { PlaylistScalarWhereInput } from './playlist-scalar-where.input';

@InputType()
export class PlaylistUncheckedUpdateManyWithoutMusicNestedInput {

    @Field(() => [PlaylistCreateWithoutMusicInput], {nullable:true})
    @Type(() => PlaylistCreateWithoutMusicInput)
    create?: Array<PlaylistCreateWithoutMusicInput>;

    @Field(() => [PlaylistCreateOrConnectWithoutMusicInput], {nullable:true})
    @Type(() => PlaylistCreateOrConnectWithoutMusicInput)
    connectOrCreate?: Array<PlaylistCreateOrConnectWithoutMusicInput>;

    @Field(() => [PlaylistUpsertWithWhereUniqueWithoutMusicInput], {nullable:true})
    @Type(() => PlaylistUpsertWithWhereUniqueWithoutMusicInput)
    upsert?: Array<PlaylistUpsertWithWhereUniqueWithoutMusicInput>;

    @Field(() => [PlaylistWhereUniqueInput], {nullable:true})
    @Type(() => PlaylistWhereUniqueInput)
    set?: Array<PlaylistWhereUniqueInput>;

    @Field(() => [PlaylistWhereUniqueInput], {nullable:true})
    @Type(() => PlaylistWhereUniqueInput)
    disconnect?: Array<PlaylistWhereUniqueInput>;

    @Field(() => [PlaylistWhereUniqueInput], {nullable:true})
    @Type(() => PlaylistWhereUniqueInput)
    delete?: Array<PlaylistWhereUniqueInput>;

    @Field(() => [PlaylistWhereUniqueInput], {nullable:true})
    @Type(() => PlaylistWhereUniqueInput)
    connect?: Array<PlaylistWhereUniqueInput>;

    @Field(() => [PlaylistUpdateWithWhereUniqueWithoutMusicInput], {nullable:true})
    @Type(() => PlaylistUpdateWithWhereUniqueWithoutMusicInput)
    update?: Array<PlaylistUpdateWithWhereUniqueWithoutMusicInput>;

    @Field(() => [PlaylistUpdateManyWithWhereWithoutMusicInput], {nullable:true})
    @Type(() => PlaylistUpdateManyWithWhereWithoutMusicInput)
    updateMany?: Array<PlaylistUpdateManyWithWhereWithoutMusicInput>;

    @Field(() => [PlaylistScalarWhereInput], {nullable:true})
    @Type(() => PlaylistScalarWhereInput)
    deleteMany?: Array<PlaylistScalarWhereInput>;
}
