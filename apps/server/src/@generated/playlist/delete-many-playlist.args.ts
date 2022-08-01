import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereInput } from './playlist-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlaylistArgs {

    @Field(() => PlaylistWhereInput, {nullable:true})
    @Type(() => PlaylistWhereInput)
    where?: PlaylistWhereInput;
}
