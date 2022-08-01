import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistCreateWithoutOwnerInput } from './playlist-create-without-owner.input';

@InputType()
export class PlaylistCreateOrConnectWithoutOwnerInput {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistCreateWithoutOwnerInput, {nullable:false})
    @Type(() => PlaylistCreateWithoutOwnerInput)
    create!: PlaylistCreateWithoutOwnerInput;
}
