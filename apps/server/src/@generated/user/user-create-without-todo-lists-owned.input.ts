import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { PlaylistCreateNestedManyWithoutOwnerInput } from '../playlist/playlist-create-nested-many-without-owner.input';
import { AccessTokenCreateNestedOneWithoutUserInput } from '../access-token/access-token-create-nested-one-without-user.input';
import { TodoListCreateNestedManyWithoutCollaboratorsInput } from '../todo-list/todo-list-create-nested-many-without-collaborators.input';

@InputType()
export class UserCreateWithoutTodoListsOwnedInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => PlaylistCreateNestedManyWithoutOwnerInput, {nullable:true})
    playlist?: PlaylistCreateNestedManyWithoutOwnerInput;

    @Field(() => AccessTokenCreateNestedOneWithoutUserInput, {nullable:true})
    accessToken?: AccessTokenCreateNestedOneWithoutUserInput;

    @Field(() => TodoListCreateNestedManyWithoutCollaboratorsInput, {nullable:true})
    todoListsCollaborated?: TodoListCreateNestedManyWithoutCollaboratorsInput;
}
