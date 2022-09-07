import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoListsOwnedInput } from './user-create-without-todo-lists-owned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoListsOwnedInput } from './user-create-or-connect-without-todo-lists-owned.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTodoListsOwnedInput {

    @Field(() => UserCreateWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserCreateWithoutTodoListsOwnedInput)
    create?: UserCreateWithoutTodoListsOwnedInput;

    @Field(() => UserCreateOrConnectWithoutTodoListsOwnedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoListsOwnedInput)
    connectOrCreate?: UserCreateOrConnectWithoutTodoListsOwnedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
