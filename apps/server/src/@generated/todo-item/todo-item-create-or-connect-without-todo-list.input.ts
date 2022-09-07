import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Type } from 'class-transformer';
import { TodoItemCreateWithoutTodoListInput } from './todo-item-create-without-todo-list.input';

@InputType()
export class TodoItemCreateOrConnectWithoutTodoListInput {

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;

    @Field(() => TodoItemCreateWithoutTodoListInput, {nullable:false})
    @Type(() => TodoItemCreateWithoutTodoListInput)
    create!: TodoItemCreateWithoutTodoListInput;
}
