import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTodoListsCollaboratedInput } from './user-update-without-todo-lists-collaborated.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTodoListsCollaboratedInput, {nullable:false})
    @Type(() => UserUpdateWithoutTodoListsCollaboratedInput)
    data!: UserUpdateWithoutTodoListsCollaboratedInput;
}
