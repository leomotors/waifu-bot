import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TodoList } from '../todo-list/todo-list.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TodoItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => TodoList, {nullable:true})
    todoList?: TodoList | null;

    @Field(() => Int, {nullable:true})
    todoListId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}