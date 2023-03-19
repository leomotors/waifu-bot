import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTodoListsOwnedInput } from '../user/user-create-nested-one-without-todo-lists-owned.input';
import { UserCreateNestedManyWithoutTodoListsCollaboratedInput } from '../user/user-create-nested-many-without-todo-lists-collaborated.input';

@InputType()
export class TodoListCreateWithoutTodoItemsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTodoListsOwnedInput, {nullable:false})
    owner!: UserCreateNestedOneWithoutTodoListsOwnedInput;

    @Field(() => UserCreateNestedManyWithoutTodoListsCollaboratedInput, {nullable:true})
    collaborators?: UserCreateNestedManyWithoutTodoListsCollaboratedInput;
}
