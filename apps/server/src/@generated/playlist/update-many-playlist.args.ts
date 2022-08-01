import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistUpdateManyMutationInput } from './playlist-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlaylistWhereInput } from './playlist-where.input';

@ArgsType()
export class UpdateManyPlaylistArgs {

    @Field(() => PlaylistUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaylistUpdateManyMutationInput)
    data!: PlaylistUpdateManyMutationInput;

    @Field(() => PlaylistWhereInput, {nullable:true})
    @Type(() => PlaylistWhereInput)
    where?: PlaylistWhereInput;
}
