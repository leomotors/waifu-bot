import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccessTokenCountOrderByAggregateInput } from './access-token-count-order-by-aggregate.input';
import { AccessTokenMaxOrderByAggregateInput } from './access-token-max-order-by-aggregate.input';
import { AccessTokenMinOrderByAggregateInput } from './access-token-min-order-by-aggregate.input';

@InputType()
export class AccessTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issued?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expire?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => AccessTokenCountOrderByAggregateInput, {nullable:true})
    _count?: AccessTokenCountOrderByAggregateInput;

    @Field(() => AccessTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: AccessTokenMaxOrderByAggregateInput;

    @Field(() => AccessTokenMinOrderByAggregateInput, {nullable:true})
    _min?: AccessTokenMinOrderByAggregateInput;
}
