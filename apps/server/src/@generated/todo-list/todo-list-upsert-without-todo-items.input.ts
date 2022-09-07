import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListUpdateWithoutTodoItemsInput } from './todo-list-update-without-todo-items.input';
import { Type } from 'class-transformer';
import { TodoListCreateWithoutTodoItemsInput } from './todo-list-create-without-todo-items.input';

@InputType()
export class TodoListUpsertWithoutTodoItemsInput {

    @Field(() => TodoListUpdateWithoutTodoItemsInput, {nullable:false})
    @Type(() => TodoListUpdateWithoutTodoItemsInput)
    update!: TodoListUpdateWithoutTodoItemsInput;

    @Field(() => TodoListCreateWithoutTodoItemsInput, {nullable:false})
    @Type(() => TodoListCreateWithoutTodoItemsInput)
    create!: TodoListCreateWithoutTodoItemsInput;
}
