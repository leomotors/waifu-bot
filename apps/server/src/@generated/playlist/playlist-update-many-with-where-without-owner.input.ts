import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistScalarWhereInput } from './playlist-scalar-where.input';
import { Type } from 'class-transformer';
import { PlaylistUpdateManyMutationInput } from './playlist-update-many-mutation.input';

@InputType()
export class PlaylistUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => PlaylistScalarWhereInput, {nullable:false})
    @Type(() => PlaylistScalarWhereInput)
    where!: PlaylistScalarWhereInput;

    @Field(() => PlaylistUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaylistUpdateManyMutationInput)
    data!: PlaylistUpdateManyMutationInput;
}
