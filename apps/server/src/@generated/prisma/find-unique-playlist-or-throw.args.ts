import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereUniqueInput } from '../playlist/playlist-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlaylistOrThrowArgs {

    @Field(() => PlaylistWhereUniqueInput, {nullable:false})
    @Type(() => PlaylistWhereUniqueInput)
    where!: PlaylistWhereUniqueInput;
}
