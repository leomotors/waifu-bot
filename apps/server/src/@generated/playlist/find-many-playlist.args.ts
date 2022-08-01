import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereInput } from './playlist-where.input';
import { Type } from 'class-transformer';
import { PlaylistOrderByWithRelationInput } from './playlist-order-by-with-relation.input';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaylistScalarFieldEnum } from './playlist-scalar-field.enum';

@ArgsType()
export class FindManyPlaylistArgs {

    @Field(() => PlaylistWhereInput, {nullable:true})
    @Type(() => PlaylistWhereInput)
    where?: PlaylistWhereInput;

    @Field(() => [PlaylistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaylistOrderByWithRelationInput>;

    @Field(() => PlaylistWhereUniqueInput, {nullable:true})
    cursor?: PlaylistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlaylistScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlaylistScalarFieldEnum>;
}
