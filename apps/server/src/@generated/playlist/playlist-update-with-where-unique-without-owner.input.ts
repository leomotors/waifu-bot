import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistUpdateWithoutOwnerInput } from './playlist-update-without-owner.input';

@InputType()
export class PlaylistUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => PlaylistUpdateWithoutOwnerInput)
    data!: PlaylistUpdateWithoutOwnerInput;
}
