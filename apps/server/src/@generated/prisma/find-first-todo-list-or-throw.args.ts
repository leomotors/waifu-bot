import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListWhereInput } from '../todo-list/todo-list-where.input';
import { Type } from 'class-transformer';
import { TodoListOrderByWithRelationInput } from '../todo-list/todo-list-order-by-with-relation.input';
import { TodoListWhereUniqueInput } from '../todo-list/todo-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoListScalarFieldEnum } from '../todo-list/todo-list-scalar-field.enum';

@ArgsType()
export class FindFirstTodoListOrThrowArgs {

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

    @Field(() => [TodoListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoListScalarFieldEnum>;
}
