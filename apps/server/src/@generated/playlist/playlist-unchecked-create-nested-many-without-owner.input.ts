import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistCreateWithoutOwnerInput } from './playlist-create-without-owner.input';
import { Type } from 'class-transformer';
import { PlaylistCreateOrConnectWithoutOwnerInput } from './playlist-create-or-connect-without-owner.input';
import { PlaylistCreateManyOwnerInputEnvelope } from './playlist-create-many-owner-input-envelope.input';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';

@InputType()
export class PlaylistUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [PlaylistCreateWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistCreateWithoutOwnerInput)
    create?: Array<PlaylistCreateWithoutOwnerInput>;

    @Field(() => [PlaylistCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => PlaylistCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<PlaylistCreateOrConnectWithoutOwnerInput>;

    @Field(() => PlaylistCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => PlaylistCreateManyOwnerInputEnvelope)
    createMany?: PlaylistCreateManyOwnerInputEnvelope;

    @Field(() => [PlaylistWhereUniqueInput], {nullable:true})
    @Type(() => PlaylistWhereUniqueInput)
    connect?: Array<PlaylistWhereUniqueInput>;
}
