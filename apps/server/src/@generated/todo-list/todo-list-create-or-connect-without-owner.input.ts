import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListCreateWithoutOwnerInput } from './todo-list-create-without-owner.input';

@InputType()
export class TodoListCreateOrConnectWithoutOwnerInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListCreateWithoutOwnerInput, {nullable:false})
    @Type(() => TodoListCreateWithoutOwnerInput)
    create!: TodoListCreateWithoutOwnerInput;
}
