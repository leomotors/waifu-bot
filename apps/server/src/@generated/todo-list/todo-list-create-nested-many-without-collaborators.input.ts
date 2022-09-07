import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutCollaboratorsInput } from './todo-list-create-without-collaborators.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutCollaboratorsInput } from './todo-list-create-or-connect-without-collaborators.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';

@InputType()
export class TodoListCreateNestedManyWithoutCollaboratorsInput {

    @Field(() => [TodoListCreateWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListCreateWithoutCollaboratorsInput)
    create?: Array<TodoListCreateWithoutCollaboratorsInput>;

    @Field(() => [TodoListCreateOrConnectWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutCollaboratorsInput)
    connectOrCreate?: Array<TodoListCreateOrConnectWithoutCollaboratorsInput>;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    connect?: Array<TodoListWhereUniqueInput>;
}
