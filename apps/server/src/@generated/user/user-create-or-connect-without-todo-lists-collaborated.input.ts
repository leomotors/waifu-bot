import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTodoListsCollaboratedInput } from './user-create-without-todo-lists-collaborated.input';

@InputType()
export class UserCreateOrConnectWithoutTodoListsCollaboratedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTodoListsCollaboratedInput, {nullable:false})
    @Type(() => UserCreateWithoutTodoListsCollaboratedInput)
    create!: UserCreateWithoutTodoListsCollaboratedInput;
}
