import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemUpdateInput } from './todo-item-update.input';
import { Type } from 'class-transformer';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';

@ArgsType()
export class UpdateOneTodoItemArgs {

    @Field(() => TodoItemUpdateInput, {nullable:false})
    @Type(() => TodoItemUpdateInput)
    data!: TodoItemUpdateInput;

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;
}
