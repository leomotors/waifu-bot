import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileCountOrderByAggregateInput } from './profile-count-order-by-aggregate.input';
import { ProfileMaxOrderByAggregateInput } from './profile-max-order-by-aggregate.input';
import { ProfileMinOrderByAggregateInput } from './profile-min-order-by-aggregate.input';

@InputType()
export class ProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastInteractGuildName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarUrl?: keyof typeof SortOrder;

    @Field(() => ProfileCountOrderByAggregateInput, {nullable:true})
    _count?: ProfileCountOrderByAggregateInput;

    @Field(() => ProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: ProfileMaxOrderByAggregateInput;

    @Field(() => ProfileMinOrderByAggregateInput, {nullable:true})
    _min?: ProfileMinOrderByAggregateInput;
}
