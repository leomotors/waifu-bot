import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaylistCountOrderByAggregateInput } from './playlist-count-order-by-aggregate.input';
import { PlaylistAvgOrderByAggregateInput } from './playlist-avg-order-by-aggregate.input';
import { PlaylistMaxOrderByAggregateInput } from './playlist-max-order-by-aggregate.input';
import { PlaylistMinOrderByAggregateInput } from './playlist-min-order-by-aggregate.input';
import { PlaylistSumOrderByAggregateInput } from './playlist-sum-order-by-aggregate.input';

@InputType()
export class PlaylistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => PlaylistCountOrderByAggregateInput, {nullable:true})
    _count?: PlaylistCountOrderByAggregateInput;

    @Field(() => PlaylistAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlaylistAvgOrderByAggregateInput;

    @Field(() => PlaylistMaxOrderByAggregateInput, {nullable:true})
    _max?: PlaylistMaxOrderByAggregateInput;

    @Field(() => PlaylistMinOrderByAggregateInput, {nullable:true})
    _min?: PlaylistMinOrderByAggregateInput;

    @Field(() => PlaylistSumOrderByAggregateInput, {nullable:true})
    _sum?: PlaylistSumOrderByAggregateInput;
}
