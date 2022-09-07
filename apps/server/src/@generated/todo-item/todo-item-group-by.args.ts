import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereInput } from './todo-item-where.input';
import { Type } from 'class-transformer';
import { TodoItemOrderByWithAggregationInput } from './todo-item-order-by-with-aggregation.input';
import { TodoItemScalarFieldEnum } from './todo-item-scalar-field.enum';
import { TodoItemScalarWhereWithAggregatesInput } from './todo-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TodoItemCountAggregateInput } from './todo-item-count-aggregate.input';
import { TodoItemAvgAggregateInput } from './todo-item-avg-aggregate.input';
import { TodoItemSumAggregateInput } from './todo-item-sum-aggregate.input';
import { TodoItemMinAggregateInput } from './todo-item-min-aggregate.input';
import { TodoItemMaxAggregateInput } from './todo-item-max-aggregate.input';

@ArgsType()
export class TodoItemGroupByArgs {

    @Field(() => TodoItemWhereInput, {nullable:true})
    @Type(() => TodoItemWhereInput)
    where?: TodoItemWhereInput;

    @Field(() => [TodoItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TodoItemOrderByWithAggregationInput>;

    @Field(() => [TodoItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodoItemScalarFieldEnum>;

    @Field(() => TodoItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: TodoItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TodoItemCountAggregateInput, {nullable:true})
    _count?: TodoItemCountAggregateInput;

    @Field(() => TodoItemAvgAggregateInput, {nullable:true})
    _avg?: TodoItemAvgAggregateInput;

    @Field(() => TodoItemSumAggregateInput, {nullable:true})
    _sum?: TodoItemSumAggregateInput;

    @Field(() => TodoItemMinAggregateInput, {nullable:true})
    _min?: TodoItemMinAggregateInput;

    @Field(() => TodoItemMaxAggregateInput, {nullable:true})
    _max?: TodoItemMaxAggregateInput;
}
