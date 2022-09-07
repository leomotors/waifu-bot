import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListScalarWhereInput } from './todo-list-scalar-where.input';
import { Type } from 'class-transformer';
import { TodoListUpdateManyMutationInput } from './todo-list-update-many-mutation.input';

@InputType()
export class TodoListUpdateManyWithWhereWithoutCollaboratorsInput {

    @Field(() => TodoListScalarWhereInput, {nullable:false})
    @Type(() => TodoListScalarWhereInput)
    where!: TodoListScalarWhereInput;

    @Field(() => TodoListUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoListUpdateManyMutationInput)
    data!: TodoListUpdateManyMutationInput;
}
