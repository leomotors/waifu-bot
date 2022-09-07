import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTodoListsOwnedInput } from './user-update-without-todo-lists-owned.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodoListsOwnedInput } from './user-create-without-todo-lists-owned.input';

@InputType()
export class UserUpsertWithoutTodoListsOwnedInput {

    @Field(() => UserUpdateWithoutTodoListsOwnedInput, {nullable:false})
    @Type(() => UserUpdateWithoutTodoListsOwnedInput)
    update!: UserUpdateWithoutTodoListsOwnedInput;

    @Field(() => UserCreateWithoutTodoListsOwnedInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoListsOwnedInput)
    create!: UserCreateWithoutTodoListsOwnedInput;
}
