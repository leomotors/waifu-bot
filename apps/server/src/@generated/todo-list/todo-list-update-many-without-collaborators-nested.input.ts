import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutCollaboratorsInput } from './todo-list-create-without-collaborators.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutCollaboratorsInput } from './todo-list-create-or-connect-without-collaborators.input';
import { TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput } from './todo-list-upsert-with-where-unique-without-collaborators.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput } from './todo-list-update-with-where-unique-without-collaborators.input';
import { TodoListUpdateManyWithWhereWithoutCollaboratorsInput } from './todo-list-update-many-with-where-without-collaborators.input';
import { TodoListScalarWhereInput } from './todo-list-scalar-where.input';

@InputType()
export class TodoListUpdateManyWithoutCollaboratorsNestedInput {

    @Field(() => [TodoListCreateWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListCreateWithoutCollaboratorsInput)
    create?: Array<TodoListCreateWithoutCollaboratorsInput>;

    @Field(() => [TodoListCreateOrConnectWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutCollaboratorsInput)
    connectOrCreate?: Array<TodoListCreateOrConnectWithoutCollaboratorsInput>;

    @Field(() => [TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput)
    upsert?: Array<TodoListUpsertWithWhereUniqueWithoutCollaboratorsInput>;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    set?: Array<TodoListWhereUniqueInput>;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    disconnect?: Array<TodoListWhereUniqueInput>;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    delete?: Array<TodoListWhereUniqueInput>;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    connect?: Array<TodoListWhereUniqueInput>;

    @Field(() => [TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput)
    update?: Array<TodoListUpdateWithWhereUniqueWithoutCollaboratorsInput>;

    @Field(() => [TodoListUpdateManyWithWhereWithoutCollaboratorsInput], {nullable:true})
    @Type(() => TodoListUpdateManyWithWhereWithoutCollaboratorsInput)
    updateMany?: Array<TodoListUpdateManyWithWhereWithoutCollaboratorsInput>;

    @Field(() => [TodoListScalarWhereInput], {nullable:true})
    @Type(() => TodoListScalarWhereInput)
    deleteMany?: Array<TodoListScalarWhereInput>;
}
