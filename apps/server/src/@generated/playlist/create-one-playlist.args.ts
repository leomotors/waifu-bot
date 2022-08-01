import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistCreateInput } from './playlist-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlaylistArgs {

    @Field(() => PlaylistCreateInput, {nullable:false})
    @Type(() => PlaylistCreateInput)
    data!: PlaylistCreateInput;
}
