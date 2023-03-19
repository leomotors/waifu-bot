import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { PlaylistUncheckedCreateNestedManyWithoutOwnerInput } from '../playlist/playlist-unchecked-create-nested-many-without-owner.input';
import { AccessTokenUncheckedCreateNestedOneWithoutUserInput } from '../access-token/access-token-unchecked-create-nested-one-without-user.input';
import { TodoListUncheckedCreateNestedManyWithoutOwnerInput } from '../todo-list/todo-list-unchecked-create-nested-many-without-owner.input';
import { TodoListUncheckedCreateNestedManyWithoutCollaboratorsInput } from '../todo-list/todo-list-unchecked-create-nested-many-without-collaborators.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PlaylistUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    playlist?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => AccessTokenUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    accessToken?: AccessTokenUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => TodoListUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    todoListsOwned?: TodoListUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => TodoListUncheckedCreateNestedManyWithoutCollaboratorsInput, {nullable:true})
    todoListsCollaborated?: TodoListUncheckedCreateNestedManyWithoutCollaboratorsInput;
}
