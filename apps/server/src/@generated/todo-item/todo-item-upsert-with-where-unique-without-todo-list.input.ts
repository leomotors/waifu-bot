import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Type } from 'class-transformer';
import { TodoItemUpdateWithoutTodoListInput } from './todo-item-update-without-todo-list.input';
import { TodoItemCreateWithoutTodoListInput } from './todo-item-create-without-todo-list.input';

@InputType()
export class TodoItemUpsertWithWhereUniqueWithoutTodoListInput {

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;

    @Field(() => TodoItemUpdateWithoutTodoListInput, {nullable:false})
    @Type(() => TodoItemUpdateWithoutTodoListInput)
    update!: TodoItemUpdateWithoutTodoListInput;

    @Field(() => TodoItemCreateWithoutTodoListInput, {nullable:false})
    @Type(() => TodoItemCreateWithoutTodoListInput)
    create!: TodoItemCreateWithoutTodoListInput;
}
