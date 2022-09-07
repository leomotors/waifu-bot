import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutTodoItemsInput } from './todo-list-create-without-todo-items.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutTodoItemsInput } from './todo-list-create-or-connect-without-todo-items.input';
import { TodoListUpsertWithoutTodoItemsInput } from './todo-list-upsert-without-todo-items.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { TodoListUpdateWithoutTodoItemsInput } from './todo-list-update-without-todo-items.input';

@InputType()
export class TodoListUpdateOneWithoutTodoItemsNestedInput {

    @Field(() => TodoListCreateWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListCreateWithoutTodoItemsInput)
    create?: TodoListCreateWithoutTodoItemsInput;

    @Field(() => TodoListCreateOrConnectWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutTodoItemsInput)
    connectOrCreate?: TodoListCreateOrConnectWithoutTodoItemsInput;

    @Field(() => TodoListUpsertWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListUpsertWithoutTodoItemsInput)
    upsert?: TodoListUpsertWithoutTodoItemsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TodoListWhereUniqueInput, {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    connect?: TodoListWhereUniqueInput;

    @Field(() => TodoListUpdateWithoutTodoItemsInput, {nullable:true})
    @Type(() => TodoListUpdateWithoutTodoItemsInput)
    update?: TodoListUpdateWithoutTodoItemsInput;
}
