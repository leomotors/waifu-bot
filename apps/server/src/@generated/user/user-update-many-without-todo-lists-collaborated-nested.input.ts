import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTodoListsCollaboratedInput } from './user-create-without-todo-lists-collaborated.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTodoListsCollaboratedInput } from './user-create-or-connect-without-todo-lists-collaborated.input';
import { UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput } from './user-upsert-with-where-unique-without-todo-lists-collaborated.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput } from './user-update-with-where-unique-without-todo-lists-collaborated.input';
import { UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput } from './user-update-many-with-where-without-todo-lists-collaborated.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutTodoListsCollaboratedNestedInput {

    @Field(() => [UserCreateWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserCreateWithoutTodoListsCollaboratedInput)
    create?: Array<UserCreateWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserCreateOrConnectWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTodoListsCollaboratedInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutTodoListsCollaboratedInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
