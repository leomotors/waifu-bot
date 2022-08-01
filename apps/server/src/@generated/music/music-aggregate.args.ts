import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereInput } from './music-where.input';
import { Type } from 'class-transformer';
import { MusicOrderByWithRelationInput } from './music-order-by-with-relation.input';
import { MusicWhereUniqueInput } from './music-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MusicCountAggregateInput } from './music-count-aggregate.input';
import { MusicAvgAggregateInput } from './music-avg-aggregate.input';
import { MusicSumAggregateInput } from './music-sum-aggregate.input';
import { MusicMinAggregateInput } from './music-min-aggregate.input';
import { MusicMaxAggregateInput } from './music-max-aggregate.input';

@ArgsType()
export class MusicAggregateArgs {

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

    @Field(() => MusicCountAggregateInput, {nullable:true})
    _count?: MusicCountAggregateInput;

    @Field(() => MusicAvgAggregateInput, {nullable:true})
    _avg?: MusicAvgAggregateInput;

    @Field(() => MusicSumAggregateInput, {nullable:true})
    _sum?: MusicSumAggregateInput;

    @Field(() => MusicMinAggregateInput, {nullable:true})
    _min?: MusicMinAggregateInput;

    @Field(() => MusicMaxAggregateInput, {nullable:true})
    _max?: MusicMaxAggregateInput;
}
