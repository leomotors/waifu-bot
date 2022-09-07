import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TodoItem } from '../todo-item/todo-item.model';
import { User } from '../user/user.model';
import { TodoListCount } from './todo-list-count.output';

@ObjectType()
export class TodoList {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [TodoItem], {nullable:true})
    todoItems?: Array<TodoItem>;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => [User], {nullable:true})
    collaborators?: Array<User>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => TodoListCount, {nullable:false})
    _count?: TodoListCount;
}
