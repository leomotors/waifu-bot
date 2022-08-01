import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistCreateManyInput } from './playlist-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlaylistArgs {

    @Field(() => [PlaylistCreateManyInput], {nullable:false})
    @Type(() => PlaylistCreateManyInput)
    data!: Array<PlaylistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
