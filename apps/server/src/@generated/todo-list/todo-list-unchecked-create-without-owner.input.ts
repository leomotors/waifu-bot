import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoItemUncheckedCreateNestedManyWithoutTodoListInput } from '../todo-item/todo-item-unchecked-create-nested-many-without-todo-list.input';
import { UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput } from '../user/user-unchecked-create-nested-many-without-todo-lists-collaborated.input';

@InputType()
export class TodoListUncheckedCreateWithoutOwnerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => TodoItemUncheckedCreateNestedManyWithoutTodoListInput, {nullable:true})
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTodoListInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput, {nullable:true})
    collaborators?: UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
