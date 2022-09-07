import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaylistUpdateManyWithoutOwnerNestedInput } from '../playlist/playlist-update-many-without-owner-nested.input';
import { AccessTokenUpdateOneWithoutUserNestedInput } from '../access-token/access-token-update-one-without-user-nested.input';
import { TodoListUpdateManyWithoutOwnerNestedInput } from '../todo-list/todo-list-update-many-without-owner-nested.input';

@InputType()
export class UserUpdateWithoutTodoListsCollaboratedInput {

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

    @Field(() => AccessTokenUpdateOneWithoutUserNestedInput, {nullable:true})
    accessToken?: AccessTokenUpdateOneWithoutUserNestedInput;

    @Field(() => TodoListUpdateManyWithoutOwnerNestedInput, {nullable:true})
    todoListsOwned?: TodoListUpdateManyWithoutOwnerNestedInput;
}
