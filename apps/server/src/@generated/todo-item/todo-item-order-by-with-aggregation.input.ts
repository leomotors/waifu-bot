import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodoItemCountOrderByAggregateInput } from './todo-item-count-order-by-aggregate.input';
import { TodoItemAvgOrderByAggregateInput } from './todo-item-avg-order-by-aggregate.input';
import { TodoItemMaxOrderByAggregateInput } from './todo-item-max-order-by-aggregate.input';
import { TodoItemMinOrderByAggregateInput } from './todo-item-min-order-by-aggregate.input';
import { TodoItemSumOrderByAggregateInput } from './todo-item-sum-order-by-aggregate.input';

@InputType()
export class TodoItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    todoListId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TodoItemCountOrderByAggregateInput, {nullable:true})
    _count?: TodoItemCountOrderByAggregateInput;

    @Field(() => TodoItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: TodoItemAvgOrderByAggregateInput;

    @Field(() => TodoItemMaxOrderByAggregateInput, {nullable:true})
    _max?: TodoItemMaxOrderByAggregateInput;

    @Field(() => TodoItemMinOrderByAggregateInput, {nullable:true})
    _min?: TodoItemMinOrderByAggregateInput;

    @Field(() => TodoItemSumOrderByAggregateInput, {nullable:true})
    _sum?: TodoItemSumOrderByAggregateInput;
}
