import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListUpdateWithoutOwnerInput } from './todo-list-update-without-owner.input';

@InputType()
export class TodoListUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => TodoListUpdateWithoutOwnerInput)
    data!: TodoListUpdateWithoutOwnerInput;
}
