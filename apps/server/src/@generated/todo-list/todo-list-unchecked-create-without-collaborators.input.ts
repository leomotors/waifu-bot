import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoItemUncheckedCreateNestedManyWithoutTodoListInput } from '../todo-item/todo-item-unchecked-create-nested-many-without-todo-list.input';

@InputType()
export class TodoListUncheckedCreateWithoutCollaboratorsInput {

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

    @Field(() => TodoItemUncheckedCreateNestedManyWithoutTodoListInput, {nullable:true})
    todoItems?: TodoItemUncheckedCreateNestedManyWithoutTodoListInput;
}
