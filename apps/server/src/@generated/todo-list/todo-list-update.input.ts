import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TodoItemUpdateManyWithoutTodoListNestedInput } from '../todo-item/todo-item-update-many-without-todo-list-nested.input';
import { UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput } from '../user/user-update-one-required-without-todo-lists-owned-nested.input';
import { UserUpdateManyWithoutTodoListsCollaboratedNestedInput } from '../user/user-update-many-without-todo-lists-collaborated-nested.input';

@InputType()
export class TodoListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TodoItemUpdateManyWithoutTodoListNestedInput, {nullable:true})
    todoItems?: TodoItemUpdateManyWithoutTodoListNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput, {nullable:true})
    owner?: UserUpdateOneRequiredWithoutTodoListsOwnedNestedInput;

    @Field(() => UserUpdateManyWithoutTodoListsCollaboratedNestedInput, {nullable:true})
    collaborators?: UserUpdateManyWithoutTodoListsCollaboratedNestedInput;
}
