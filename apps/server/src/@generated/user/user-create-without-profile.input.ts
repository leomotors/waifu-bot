import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistCreateNestedManyWithoutOwnerInput } from '../playlist/playlist-create-nested-many-without-owner.input';
import { AccessTokenCreateNestedOneWithoutUserInput } from '../access-token/access-token-create-nested-one-without-user.input';
import { TodoListCreateNestedManyWithoutOwnerInput } from '../todo-list/todo-list-create-nested-many-without-owner.input';
import { TodoListCreateNestedManyWithoutCollaboratorsInput } from '../todo-list/todo-list-create-nested-many-without-collaborators.input';

@InputType()
export class UserCreateWithoutProfileInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlaylistCreateNestedManyWithoutOwnerInput, {nullable:true})
    playlist?: PlaylistCreateNestedManyWithoutOwnerInput;

    @Field(() => AccessTokenCreateNestedOneWithoutUserInput, {nullable:true})
    accessToken?: AccessTokenCreateNestedOneWithoutUserInput;

    @Field(() => TodoListCreateNestedManyWithoutOwnerInput, {nullable:true})
    todoListsOwned?: TodoListCreateNestedManyWithoutOwnerInput;

    @Field(() => TodoListCreateNestedManyWithoutCollaboratorsInput, {nullable:true})
    todoListsCollaborated?: TodoListCreateNestedManyWithoutCollaboratorsInput;
}
