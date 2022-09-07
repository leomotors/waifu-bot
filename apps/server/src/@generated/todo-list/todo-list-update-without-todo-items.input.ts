import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput } from '../user/user-update-one-required-without-todo-lists-owned-nested.input';
import { UserUpdateManyWithoutTodoListsCollaboratedNestedInput } from '../user/user-update-many-without-todo-lists-collaborated-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TodoListUpdateWithoutTodoItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput;

    @Field(() => UserUpdateManyWithoutTodoListsCollaboratedNestedInput, {nullable:true})
    collaborators?: UserUpdateManyWithoutTodoListsCollaboratedNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
