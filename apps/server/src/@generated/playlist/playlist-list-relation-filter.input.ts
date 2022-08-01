import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistWhereInput } from './playlist-where.input';

@InputType()
export class PlaylistListRelationFilter {

    @Field(() => PlaylistWhereInput, {nullable:true})
    every?: PlaylistWhereInput;

    @Field(() => PlaylistWhereInput, {nullable:true})
    some?: PlaylistWhereInput;

    @Field(() => PlaylistWhereInput, {nullable:true})
    none?: PlaylistWhereInput;
}
