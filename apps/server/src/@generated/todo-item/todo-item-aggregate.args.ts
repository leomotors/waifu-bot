import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereInput } from './todo-item-where.input';
import { Type } from 'class-transformer';
import { TodoItemOrderByWithRelationInput } from './todo-item-order-by-with-relation.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoItemCountAggregateInput } from './todo-item-count-aggregate.input';
import { TodoItemAvgAggregateInput } from './todo-item-avg-aggregate.input';
import { TodoItemSumAggregateInput } from './todo-item-sum-aggregate.input';
import { TodoItemMinAggregateInput } from './todo-item-min-aggregate.input';
import { TodoItemMaxAggregateInput } from './todo-item-max-aggregate.input';

@ArgsType()
export class TodoItemAggregateArgs {

    @Field(() => TodoItemWhereInput, {nullable:true})
    @Type(() => TodoItemWhereInput)
    where?: TodoItemWhereInput;

    @Field(() => [TodoItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoItemOrderByWithRelationInput>;

    @Field(() => TodoItemWhereUniqueInput, {nullable:true})
    cursor?: TodoItemWhereUniqueInput;

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
