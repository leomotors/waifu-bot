import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateWithoutOwnerInput } from './todo-list-create-without-owner.input';
import { Type } from 'class-transformer';
import { TodoListCreateOrConnectWithoutOwnerInput } from './todo-list-create-or-connect-without-owner.input';
import { TodoListCreateManyOwnerInputEnvelope } from './todo-list-create-many-owner-input-envelope.input';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';

@InputType()
export class TodoListCreateNestedManyWithoutOwnerInput {

    @Field(() => [TodoListCreateWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListCreateWithoutOwnerInput)
    create?: Array<TodoListCreateWithoutOwnerInput>;

    @Field(() => [TodoListCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => TodoListCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<TodoListCreateOrConnectWithoutOwnerInput>;

    @Field(() => TodoListCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => TodoListCreateManyOwnerInputEnvelope)
    createMany?: TodoListCreateManyOwnerInputEnvelope;

    @Field(() => [TodoListWhereUniqueInput], {nullable:true})
    @Type(() => TodoListWhereUniqueInput)
    connect?: Array<TodoListWhereUniqueInput>;
}
