import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput } from '../user/user-unchecked-create-nested-many-without-todo-lists-collaborated.input';

@InputType()
export class TodoListUncheckedCreateWithoutTodoItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput, {nullable:true})
    collaborators?: UserUncheckedCreateNestedManyWithoutTodoListsCollaboratedInput;
}
