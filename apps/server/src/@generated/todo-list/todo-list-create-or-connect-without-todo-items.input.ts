import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListCreateWithoutTodoItemsInput } from './todo-list-create-without-todo-items.input';

@InputType()
export class TodoListCreateOrConnectWithoutTodoItemsInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListCreateWithoutTodoItemsInput, {nullable:false})
    @Type(() => TodoListCreateWithoutTodoItemsInput)
    create!: TodoListCreateWithoutTodoItemsInput;
}
