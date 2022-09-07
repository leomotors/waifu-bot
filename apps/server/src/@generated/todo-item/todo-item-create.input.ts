import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateNestedOneWithoutTodoItemsInput } from '../todo-list/todo-list-create-nested-one-without-todo-items.input';

@InputType()
export class TodoItemCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => TodoListCreateNestedOneWithoutTodoItemsInput, {nullable:true})
    todoList?: TodoListCreateNestedOneWithoutTodoItemsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
