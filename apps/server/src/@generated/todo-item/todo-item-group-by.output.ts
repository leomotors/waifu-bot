import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoItemCountAggregate } from './todo-item-count-aggregate.output';
import { TodoItemAvgAggregate } from './todo-item-avg-aggregate.output';
import { TodoItemSumAggregate } from './todo-item-sum-aggregate.output';
import { TodoItemMinAggregate } from './todo-item-min-aggregate.output';
import { TodoItemMaxAggregate } from './todo-item-max-aggregate.output';

@ObjectType()
export class TodoItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Int, {nullable:true})
    todoListId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TodoItemCountAggregate, {nullable:true})
    _count?: TodoItemCountAggregate;

    @Field(() => TodoItemAvgAggregate, {nullable:true})
    _avg?: TodoItemAvgAggregate;

    @Field(() => TodoItemSumAggregate, {nullable:true})
    _sum?: TodoItemSumAggregate;

    @Field(() => TodoItemMinAggregate, {nullable:true})
    _min?: TodoItemMinAggregate;

    @Field(() => TodoItemMaxAggregate, {nullable:true})
    _max?: TodoItemMaxAggregate;
}
