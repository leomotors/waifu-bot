import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TodoItemListRelationFilter } from '../todo-item/todo-item-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class TodoListWhereInput {

    @Field(() => [TodoListWhereInput], {nullable:true})
    AND?: Array<TodoListWhereInput>;

    @Field(() => [TodoListWhereInput], {nullable:true})
    OR?: Array<TodoListWhereInput>;

    @Field(() => [TodoListWhereInput], {nullable:true})
    NOT?: Array<TodoListWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TodoItemListRelationFilter, {nullable:true})
    todoItems?: TodoItemListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    owner?: UserRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    collaborators?: UserListRelationFilter;
}
