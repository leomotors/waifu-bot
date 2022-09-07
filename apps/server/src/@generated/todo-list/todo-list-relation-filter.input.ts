import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereInput } from './todo-list-where.input';

@InputType()
export class TodoListRelationFilter {

    @Field(() => TodoListWhereInput, {nullable:true})
    is?: TodoListWhereInput;

    @Field(() => TodoListWhereInput, {nullable:true})
    isNot?: TodoListWhereInput;
}
