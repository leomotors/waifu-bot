import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaylistWhereInput } from './playlist-where.input';
import { Type } from 'class-transformer';
import { PlaylistOrderByWithRelationInput } from './playlist-order-by-with-relation.input';
import { PlaylistWhereUniqueInput } from './playlist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaylistCountAggregateInput } from './playlist-count-aggregate.input';
import { PlaylistAvgAggregateInput } from './playlist-avg-aggregate.input';
import { PlaylistSumAggregateInput } from './playlist-sum-aggregate.input';
import { PlaylistMinAggregateInput } from './playlist-min-aggregate.input';
import { PlaylistMaxAggregateInput } from './playlist-max-aggregate.input';

@ArgsType()
export class PlaylistAggregateArgs {

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

    @Field(() => PlaylistCountAggregateInput, {nullable:true})
    _count?: PlaylistCountAggregateInput;

    @Field(() => PlaylistAvgAggregateInput, {nullable:true})
    _avg?: PlaylistAvgAggregateInput;

    @Field(() => PlaylistSumAggregateInput, {nullable:true})
    _sum?: PlaylistSumAggregateInput;

    @Field(() => PlaylistMinAggregateInput, {nullable:true})
    _min?: PlaylistMinAggregateInput;

    @Field(() => PlaylistMaxAggregateInput, {nullable:true})
    _max?: PlaylistMaxAggregateInput;
}
