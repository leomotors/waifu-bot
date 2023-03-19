import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TodoItemUncheckedUpdateManyWithoutTodoListNestedInput } from '../todo-item/todo-item-unchecked-update-many-without-todo-list-nested.input';
import { UserUncheckedUpdateManyWithoutTodoListsCollaboratedNestedInput } from '../user/user-unchecked-update-many-without-todo-lists-collaborated-nested.input';

@InputType()
export class TodoListUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ownerId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TodoItemUncheckedUpdateManyWithoutTodoListNestedInput, {nullable:true})
    todoItems?: TodoItemUncheckedUpdateManyWithoutTodoListNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutTodoListsCollaboratedNestedInput, {nullable:true})
    collaborators?: UserUncheckedUpdateManyWithoutTodoListsCollaboratedNestedInput;
}
