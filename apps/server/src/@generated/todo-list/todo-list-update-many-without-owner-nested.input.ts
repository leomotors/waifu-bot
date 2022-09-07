import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutOwnerInput } from './todo-list-create-without-owner.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutOwnerInput } from './todo-list-create-or-connect-without-owner.input';
import { TodoListUpsertWithWhereUniqueWithoutOwnerInput } from './todo-list-upsert-with-where-unique-without-owner.input';
import { TodoListCreateManyOwnerInputEnvelope } from './todo-list-create-many-owner-input-envelope.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { TodoListUpdateWithWhereUniqueWithoutOwnerInput } from './todo-list-update-with-where-unique-without-owner.input';
import { TodoListUpdateManyWithWhereWithoutOwnerInput } from './todo-list-update-many-with-where-without-owner.input';
import { TodoListScalarWhereInput } from './todo-list-scalar-where.input';

@InputType()
export class TodoListUpdateManyWithoutOwnerNestedInput {

    @Field(() => [TodoListCreateWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListCreateWithoutOwnerInput)
    create?: Array<TodoListCreateWithoutOwnerInput>;

    @Field(() => [TodoListCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<TodoListCreateOrConnectWithoutOwnerInput>;

    @Field(() => [TodoListUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<TodoListUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => TodoListCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => TodoListCreateManyOwnerInputEnvelope)
    createMany?: TodoListCreateManyOwnerInputEnvelope;

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

    @Field(() => [TodoListUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<TodoListUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [TodoListUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<TodoListUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [TodoListScalarWhereInput], {nullable:true})
    @Type(() => TodoListScalarWhereInput)
    deleteMany?: Array<TodoListScalarWhereInput>;
}
