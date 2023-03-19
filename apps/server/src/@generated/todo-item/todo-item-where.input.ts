import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TodoListRelationFilter } from '../todo-list/todo-list-relation-filter.input';

@InputType()
export class TodoItemWhereInput {

    @Field(() => [TodoItemWhereInput], {nullable:true})
    AND?: Array<TodoItemWhereInput>;

    @Field(() => [TodoItemWhereInput], {nullable:true})
    OR?: Array<TodoItemWhereInput>;

    @Field(() => [TodoItemWhereInput], {nullable:true})
    NOT?: Array<TodoItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    todoListId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TodoListRelationFilter, {nullable:true})
    todoList?: TodoListRelationFilter;
}
