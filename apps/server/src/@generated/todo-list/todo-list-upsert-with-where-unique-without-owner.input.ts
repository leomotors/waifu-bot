import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListUpdateWithoutOwnerInput } from './todo-list-update-without-owner.input';
import { TodoListCreateWithoutOwnerInput } from './todo-list-create-without-owner.input';

@InputType()
export class TodoListUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => TodoListUpdateWithoutOwnerInput)
    update!: TodoListUpdateWithoutOwnerInput;

    @Field(() => TodoListCreateWithoutOwnerInput, {nullable:false})
    @Type(() => TodoListCreateWithoutOwnerInput)
    create!: TodoListCreateWithoutOwnerInput;
}
