import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereInput } from './todo-item-where.input';
import { Type } from 'class-transformer';
import { TodoItemOrderByWithRelationInput } from './todo-item-order-by-with-relation.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoItemScalarFieldEnum } from './todo-item-scalar-field.enum';

@ArgsType()
export class FindManyTodoItemArgs {

    @Field(() => TodoItemWhereInput, {nullable:true})
    @Type(() => TodoItemWhereInput)
    where?: TodoItemWhereInput;

    @Field(() => [TodoItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoItemOrderByWithRelationInput>;

    @Field(() => TodoItemWhereUniqueInput, {nullable:true})
    cursor?: TodoItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TodoItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoItemScalarFieldEnum>;
}
