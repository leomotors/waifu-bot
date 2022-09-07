import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Type } from 'class-transformer';
import { TodoItemUpdateWithoutTodoListInput } from './todo-item-update-without-todo-list.input';

@InputType()
export class TodoItemUpdateWithWhereUniqueWithoutTodoListInput {

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;

    @Field(() => TodoItemUpdateWithoutTodoListInput, {nullable:false})
    @Type(() => TodoItemUpdateWithoutTodoListInput)
    data!: TodoItemUpdateWithoutTodoListInput;
}
