import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListUpdateWithoutCollaboratorsInput } from './todo-list-update-without-collaborators.input';
import { TodoListCreateWithoutCollaboratorsInput } from './todo-list-create-without-collaborators.input';

@InputType()
export class TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListUpdateWithoutCollaboratorsInput, {nullable:false})
    @Type(() => TodoListUpdateWithoutCollaboratorsInput)
    update!: TodoListUpdateWithoutCollaboratorsInput;

    @Field(() => TodoListCreateWithoutCollaboratorsInput, {nullable:false})
    @Type(() => TodoListCreateWithoutCollaboratorsInput)
    create!: TodoListCreateWithoutCollaboratorsInput;
}
