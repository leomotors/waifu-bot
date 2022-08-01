import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlaylistArgs {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;
}
