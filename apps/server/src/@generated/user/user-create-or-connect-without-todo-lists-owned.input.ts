import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodoListsOwnedInput } from './user-create-without-todo-lists-owned.input';

@InputType()
export class UserCreateOrConnectWithoutTodoListsOwnedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTodoListsOwnedInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoListsOwnedInput)
    create!: UserCreateWithoutTodoListsOwnedInput;
}
