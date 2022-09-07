import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoListsOwnedInput } from './user-create-without-todo-lists-owned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoListsOwnedInput } from './user-create-or-connect-without-todo-lists-owned.input';
import { UserUpsertWithoutTodoListsOwnedInput } from './user-upsert-without-todo-lists-owned.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTodoListsOwnedInput } from './user-update-without-todo-lists-owned.input';

@InputType()
export class UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput {

    @Field(() => UserCreateWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoListsOwnedInput)
    create?: UserCreateWithoutTodoListsOwnedInput;

    @Field(() => UserCreateOrConnectWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoListsOwnedInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodoListsOwnedInput;

    @Field(() => UserUpsertWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserUpsertWithoutTodoListsOwnedInput)
    upsert?: UserUpsertWithoutTodoListsOwnedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserUpdateWithoutTodoListsOwnedInput)
    update?: UserUpdateWithoutTodoListsOwnedInput;
}
