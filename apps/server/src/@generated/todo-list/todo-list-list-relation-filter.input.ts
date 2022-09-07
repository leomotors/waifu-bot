import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereInput } from './todo-list-where.input';

@InputType()
export class TodoListListRelationFilter {

    @Field(() => TodoListWhereInput, {nullable:true})
    every?: TodoListWhereInput;

    @Field(() => TodoListWhereInput, {nullable:true})
    some?: TodoListWhereInput;

    @Field(() => TodoListWhereInput, {nullable:true})
    none?: TodoListWhereInput;
}
