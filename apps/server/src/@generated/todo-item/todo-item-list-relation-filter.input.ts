import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemWhereInput } from './todo-item-where.input';

@InputType()
export class TodoItemListRelationFilter {

    @Field(() => TodoItemWhereInput, {nullable:true})
    every?: TodoItemWhereInput;

    @Field(() => TodoItemWhereInput, {nullable:true})
    some?: TodoItemWhereInput;

    @Field(() => TodoItemWhereInput, {nullable:true})
    none?: TodoItemWhereInput;
}
