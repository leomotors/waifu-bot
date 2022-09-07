import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemScalarWhereInput } from './todo-item-scalar-where.input';
import { Type } from 'class-transformer';
import { TodoItemUpdateManyMutationInput } from './todo-item-update-many-mutation.input';

@InputType()
export class TodoItemUpdateManyWithWhereWithoutTodoListInput {

    @Field(() => TodoItemScalarWhereInput, {nullable:false})
    @Type(() => TodoItemScalarWhereInput)
    where!: TodoItemScalarWhereInput;

    @Field(() => TodoItemUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoItemUpdateManyMutationInput)
    data!: TodoItemUpdateManyMutationInput;
}
