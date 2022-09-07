import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoListsCollaboratedInput } from './user-create-without-todo-lists-collaborated.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoListsCollaboratedInput } from './user-create-or-connect-without-todo-lists-collaborated.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutTodoListsCollaboratedInput {

    @Field(() => [UserCreateWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserCreateWithoutTodoListsCollaboratedInput)
    create?: Array<UserCreateWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserCreateOrConnectWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoListsCollaboratedInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
