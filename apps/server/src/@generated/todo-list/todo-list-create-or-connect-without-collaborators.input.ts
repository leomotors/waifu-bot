import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListCreateWithoutCollaboratorsInput } from './todo-list-create-without-collaborators.input';

@InputType()
export class TodoListCreateOrConnectWithoutCollaboratorsInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListCreateWithoutCollaboratorsInput, {nullable:false})
    @Type(() => TodoListCreateWithoutCollaboratorsInput)
    create!: TodoListCreateWithoutCollaboratorsInput;
}
