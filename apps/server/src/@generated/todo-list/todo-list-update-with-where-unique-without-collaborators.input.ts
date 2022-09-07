import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListUpdateWithoutCollaboratorsInput } from './todo-list-update-without-collaborators.input';

@InputType()
export class TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListUpdateWithoutCollaboratorsInput, {nullable:false})
    @Type(() => TodoListUpdateWithoutCollaboratorsInput)
    data!: TodoListUpdateWithoutCollaboratorsInput;
}
