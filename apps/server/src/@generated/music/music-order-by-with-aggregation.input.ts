import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MusicCountOrderByAggregateInput } from './music-count-order-by-aggregate.input';
import { MusicAvgOrderByAggregateInput } from './music-avg-order-by-aggregate.input';
import { MusicMaxOrderByAggregateInput } from './music-max-order-by-aggregate.input';
import { MusicMinOrderByAggregateInput } from './music-min-order-by-aggregate.input';
import { MusicSumOrderByAggregateInput } from './music-sum-order-by-aggregate.input';

@InputType()
export class MusicOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    videoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortDescription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lengthSeconds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorChannelUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnailUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MusicCountOrderByAggregateInput, {nullable:true})
    _count?: MusicCountOrderByAggregateInput;

    @Field(() => MusicAvgOrderByAggregateInput, {nullable:true})
    _avg?: MusicAvgOrderByAggregateInput;

    @Field(() => MusicMaxOrderByAggregateInput, {nullable:true})
    _max?: MusicMaxOrderByAggregateInput;

    @Field(() => MusicMinOrderByAggregateInput, {nullable:true})
    _min?: MusicMinOrderByAggregateInput;

    @Field(() => MusicSumOrderByAggregateInput, {nullable:true})
    _sum?: MusicSumOrderByAggregateInput;
}
