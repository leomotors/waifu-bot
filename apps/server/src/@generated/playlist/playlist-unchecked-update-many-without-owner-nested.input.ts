import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistCreateWithoutOwnerInput } from './playlist-create-without-owner.input';
import { Type } from 'class-transformer';
import { PlaylistCreateOrConnectWithoutOwnerInput } from './playlist-create-or-connect-without-owner.input';
import { PlaylistUpsertWithWhereUniqueWithoutOwnerInput } from './playlist-upsert-with-where-unique-without-owner.input';
import { PlaylistCreateManyOwnerInputEnvelope } from './playlist-create-many-owner-input-envelope.input';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { PlaylistUpdateWithWhereUniqueWithoutOwnerInput } from './playlist-update-with-where-unique-without-owner.input';
import { PlaylistUpdateManyWithWhereWithoutOwnerInput } from './playlist-update-many-with-where-without-owner.input';
import { PlaylistScalarWhereInput } from './playlist-scalar-where.input';

@InputType()
export class PlaylistUncheckedUpdateManyWithoutOwnerNestedInput {

    @Field(() => [PlaylistCreateWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistCreateWithoutOwnerInput)
    create?: Array<PlaylistCreateWithoutOwnerInput>;

    @Field(() => [PlaylistCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<PlaylistCreateOrConnectWithoutOwnerInput>;

    @Field(() => [PlaylistUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<PlaylistUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => PlaylistCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => PlaylistCreateManyOwnerInputEnvelope)
    createMany?: PlaylistCreateManyOwnerInputEnvelope;

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

    @Field(() => [PlaylistUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<PlaylistUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [PlaylistUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<PlaylistUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [PlaylistScalarWhereInput], {nullable:true})
    @Type(() => PlaylistScalarWhereInput)
    deleteMany?: Array<PlaylistScalarWhereInput>;
}
