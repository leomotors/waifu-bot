import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TodoListCount {

    @Field(() => Int, {nullable:false})
    todoItems?: number;

    @Field(() => Int, {nullable:false})
    collaborators?: number;
}
