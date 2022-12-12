import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereInput } from './music-where.input';
import { Type } from 'class-transformer';
import { MusicOrderByWithRelationInput } from './music-order-by-with-relation.input';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MusicScalarFieldEnum } from './music-scalar-field.enum';

@ArgsType()
export class FindFirstMusicOrThrowArgs {

    @Field(() => MusicWhereInput, {nullable:true})
    @Type(() => MusicWhereInput)
    where?: MusicWhereInput;

    @Field(() => [MusicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MusicOrderByWithRelationInput>;

    @Field(() => MusicWhereUniqueInput, {nullable:true})
    cursor?: MusicWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MusicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MusicScalarFieldEnum>;
}
