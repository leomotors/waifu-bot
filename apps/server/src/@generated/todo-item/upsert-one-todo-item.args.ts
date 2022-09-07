import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Type } from 'class-transformer';
import { TodoItemCreateInput } from './todo-item-create.input';
import { TodoItemUpdateInput } from './todo-item-update.input';

@ArgsType()
export class UpsertOneTodoItemArgs {

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;

    @Field(() => TodoItemCreateInput, {nullable:false})
    @Type(() => TodoItemCreateInput)
    create!: TodoItemCreateInput;

    @Field(() => TodoItemUpdateInput, {nullable:false})
    @Type(() => TodoItemUpdateInput)
    update!: TodoItemUpdateInput;
}
