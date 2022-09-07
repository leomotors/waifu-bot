import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListWhereInput } from './todo-list-where.input';
import { Type } from 'class-transformer';
import { TodoListOrderByWithRelationInput } from './todo-list-order-by-with-relation.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoListCountAggregateInput } from './todo-list-count-aggregate.input';
import { TodoListAvgAggregateInput } from './todo-list-avg-aggregate.input';
import { TodoListSumAggregateInput } from './todo-list-sum-aggregate.input';
import { TodoListMinAggregateInput } from './todo-list-min-aggregate.input';
import { TodoListMaxAggregateInput } from './todo-list-max-aggregate.input';

@ArgsType()
export class TodoListAggregateArgs {

    @Field(() => TodoListWhereInput, {nullable:true})
    @Type(() => TodoListWhereInput)
    where?: TodoListWhereInput;

    @Field(() => [TodoListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoListOrderByWithRelationInput>;

    @Field(() => TodoListWhereUniqueInput, {nullable:true})
    cursor?: TodoListWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TodoListCountAggregateInput, {nullable:true})
    _count?: TodoListCountAggregateInput;

    @Field(() => TodoListAvgAggregateInput, {nullable:true})
    _avg?: TodoListAvgAggregateInput;

    @Field(() => TodoListSumAggregateInput, {nullable:true})
    _sum?: TodoListSumAggregateInput;

    @Field(() => TodoListMinAggregateInput, {nullable:true})
    _min?: TodoListMinAggregateInput;

    @Field(() => TodoListMaxAggregateInput, {nullable:true})
    _max?: TodoListMaxAggregateInput;
}
