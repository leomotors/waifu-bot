import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MusicScalarWhereInput } from './music-scalar-where.input';
import { Type } from 'class-transformer';
import { MusicUpdateManyMutationInput } from './music-update-many-mutation.input';

@InputType()
export class MusicUpdateManyWithWhereWithoutPlaylistInput {

    @Field(() => MusicScalarWhereInput, {nullable:false})
    @Type(() => MusicScalarWhereInput)
    where!: MusicScalarWhereInput;

    @Field(() => MusicUpdateManyMutationInput, {nullable:false})
    @Type(() => MusicUpdateManyMutationInput)
    data!: MusicUpdateManyMutationInput;
}
