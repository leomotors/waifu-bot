import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutTodoItemsInput } from './todo-list-create-without-todo-items.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutTodoItemsInput } from './todo-list-create-or-connect-without-todo-items.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';

@InputType()
export class TodoListCreateNestedOneWithoutTodoItemsInput {

    @Field(() => TodoListCreateWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListCreateWithoutTodoItemsInput)
    create?: TodoListCreateWithoutTodoItemsInput;

    @Field(() => TodoListCreateOrConnectWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutTodoItemsInput)
    connectOrCreate?: TodoListCreateOrConnectWithoutTodoItemsInput;

    @Field(() => TodoListWhereUniqueInput, {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    connect?: TodoListWhereUniqueInput;
}
