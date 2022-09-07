import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodoListCountOrderByAggregateInput } from './todo-list-count-order-by-aggregate.input';
import { TodoListAvgOrderByAggregateInput } from './todo-list-avg-order-by-aggregate.input';
import { TodoListMaxOrderByAggregateInput } from './todo-list-max-order-by-aggregate.input';
import { TodoListMinOrderByAggregateInput } from './todo-list-min-order-by-aggregate.input';
import { TodoListSumOrderByAggregateInput } from './todo-list-sum-order-by-aggregate.input';

@InputType()
export class TodoListOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TodoListCountOrderByAggregateInput, {nullable:true})
    _count?: TodoListCountOrderByAggregateInput;

    @Field(() => TodoListAvgOrderByAggregateInput, {nullable:true})
    _avg?: TodoListAvgOrderByAggregateInput;

    @Field(() => TodoListMaxOrderByAggregateInput, {nullable:true})
    _max?: TodoListMaxOrderByAggregateInput;

    @Field(() => TodoListMinOrderByAggregateInput, {nullable:true})
    _min?: TodoListMinOrderByAggregateInput;

    @Field(() => TodoListSumOrderByAggregateInput, {nullable:true})
    _sum?: TodoListSumOrderByAggregateInput;
}
