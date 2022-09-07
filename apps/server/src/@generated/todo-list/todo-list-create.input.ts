import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemCreateNestedManyWithoutTodoListInput } from '../todo-item/todo-item-create-nested-many-without-todo-list.input';
import { UserCreateNestedOneWithoutTodoListsOwnedInput } from '../user/user-create-nested-one-without-todo-lists-owned.input';
import { UserCreateNestedManyWithoutTodoListsCollaboratedInput } from '../user/user-create-nested-many-without-todo-lists-collaborated.input';

@InputType()
export class TodoListCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => TodoItemCreateNestedManyWithoutTodoListInput, {nullable:true})
    todoItems?: TodoItemCreateNestedManyWithoutTodoListInput;

    @Field(() => UserCreateNestedOneWithoutTodoListsOwnedInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutTodoListsOwnedInput;

    @Field(() => UserCreateNestedManyWithoutTodoListsCollaboratedInput, {nullable:true})
    collaborators?: UserCreateNestedManyWithoutTodoListsCollaboratedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
