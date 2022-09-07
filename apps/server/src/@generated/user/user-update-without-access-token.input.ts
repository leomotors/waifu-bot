import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaylistUpdateManyWithoutOwnerNestedInput } from '../playlist/playlist-update-many-without-owner-nested.input';
import { TodoListUpdateManyWithoutOwnerNestedInput } from '../todo-list/todo-list-update-many-without-owner-nested.input';
import { TodoListUpdateManyWithoutCollaboratorsNestedInput } from '../todo-list/todo-list-update-many-without-collaborators-nested.input';

@InputType()
export class UserUpdateWithoutAccessTokenInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaylistUpdateManyWithoutOwnerNestedInput, {nullable:true})
    playlist?: PlaylistUpdateManyWithoutOwnerNestedInput;

    @Field(() => TodoListUpdateManyWithoutOwnerNestedInput, {nullable:true})
    todoListsOwned?: TodoListUpdateManyWithoutOwnerNestedInput;

    @Field(() => TodoListUpdateManyWithoutCollaboratorsNestedInput, {nullable:true})
    todoListsCollaborated?: TodoListUpdateManyWithoutCollaboratorsNestedInput;
}
