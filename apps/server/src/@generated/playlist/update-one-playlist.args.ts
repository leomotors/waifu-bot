import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistUpdateInput } from './playlist-update.input';
import { Type } from 'class-transformer';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';

@ArgsType()
export class UpdateOnePlaylistArgs {

    @Field(() => PlaylistUpdateInput, {nullable:false})
    @Type(() => PlaylistUpdateInput)
    data!: PlaylistUpdateInput;

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;
}
