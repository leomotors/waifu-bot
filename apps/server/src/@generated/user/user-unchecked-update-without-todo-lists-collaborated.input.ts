import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaylistUncheckedUpdateManyWithoutOwnerNestedInput } from '../playlist/playlist-unchecked-update-many-without-owner-nested.input';
import { AccessTokenUncheckedUpdateOneWithoutUserNestedInput } from '../access-token/access-token-unchecked-update-one-without-user-nested.input';
import { TodoListUncheckedUpdateManyWithoutOwnerNestedInput } from '../todo-list/todo-list-unchecked-update-many-without-owner-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutTodoListsCollaboratedInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaylistUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    playlist?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => AccessTokenUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    accessToken?: AccessTokenUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => TodoListUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    todoListsOwned?: TodoListUncheckedUpdateManyWithoutOwnerNestedInput;
}
