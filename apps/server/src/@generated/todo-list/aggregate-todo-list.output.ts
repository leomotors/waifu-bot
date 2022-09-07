import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TodoListCountAggregate } from './todo-list-count-aggregate.output';
import { TodoListAvgAggregate } from './todo-list-avg-aggregate.output';
import { TodoListSumAggregate } from './todo-list-sum-aggregate.output';
import { TodoListMinAggregate } from './todo-list-min-aggregate.output';
import { TodoListMaxAggregate } from './todo-list-max-aggregate.output';

@ObjectType()
export class AggregateTodoList {

    @Field(() => TodoListCountAggregate, {nullable:true})
    _count?: TodoListCountAggregate;

    @Field(() => TodoListAvgAggregate, {nullable:true})
    _avg?: TodoListAvgAggregate;

    @Field(() => TodoListSumAggregate, {nullable:true})
    _sum?: TodoListSumAggregate;

    @Field(() => TodoListMinAggregate, {nullable:true})
    _min?: TodoListMinAggregate;

    @Field(() => TodoListMaxAggregate, {nullable:true})
    _max?: TodoListMaxAggregate;
}
