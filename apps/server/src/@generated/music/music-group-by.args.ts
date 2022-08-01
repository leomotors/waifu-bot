import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MusicWhereInput } from './music-where.input';
import { Type } from 'class-transformer';
import { MusicOrderByWithAggregationInput } from './music-order-by-with-aggregation.input';
import { MusicScalarFieldEnum } from './music-scalar-field.enum';
import { MusicScalarWhereWithAggregatesInput } from './music-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MusicCountAggregateInput } from './music-count-aggregate.input';
import { MusicAvgAggregateInput } from './music-avg-aggregate.input';
import { MusicSumAggregateInput } from './music-sum-aggregate.input';
import { MusicMinAggregateInput } from './music-min-aggregate.input';
import { MusicMaxAggregateInput } from './music-max-aggregate.input';

@ArgsType()
export class MusicGroupByArgs {

    @Field(() => MusicWhereInput, {nullable:true})
    @Type(() => MusicWhereInput)
    where?: MusicWhereInput;

    @Field(() => [MusicOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MusicOrderByWithAggregationInput>;

    @Field(() => [MusicScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MusicScalarFieldEnum>;

    @Field(() => MusicScalarWhereWithAggregatesInput, {nullable:true})
    having?: MusicScalarWhereWithAggregatesInput;

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
