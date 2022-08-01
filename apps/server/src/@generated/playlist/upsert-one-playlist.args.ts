import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Type } from 'class-transformer';
import { PlaylistCreateInput } from './playlist-create.input';
import { PlaylistUpdateInput } from './playlist-update.input';

@ArgsType()
export class UpsertOnePlaylistArgs {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;

    @Field(() => PlaylistCreateInput, {nullable:false})
    @Type(() => PlaylistCreateInput)
    create!: PlaylistCreateInput;

    @Field(() => PlaylistUpdateInput, {nullable:false})
    @Type(() => PlaylistUpdateInput)
    update!: PlaylistUpdateInput;
}
