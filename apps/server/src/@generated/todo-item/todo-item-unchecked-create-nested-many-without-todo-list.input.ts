import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemCreateWithoutTodoListInput } from './todo-item-create-without-todo-list.input';
import { Type } from 'class-transformer';
import { TodoItemCreateOrConnectWithoutTodoListInput } from './todo-item-create-or-connect-without-todo-list.input';
import { TodoItemCreateManyTodoListInputEnvelope } from './todo-item-create-many-todo-list-input-envelope.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';

@InputType()
export class TodoItemUncheckedCreateNestedManyWithoutTodoListInput {

    @Field(() => [TodoItemCreateWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemCreateWithoutTodoListInput)
    create?: Array<TodoItemCreateWithoutTodoListInput>;

    @Field(() => [TodoItemCreateOrConnectWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemCreateOrConnectWithoutTodoListInput)
    connectOrCreate?: Array<TodoItemCreateOrConnectWithoutTodoListInput>;

    @Field(() => TodoItemCreateManyTodoListInputEnvelope, {nullable:true})
    @Type(() => TodoItemCreateManyTodoListInputEnvelope)
    createMany?: TodoItemCreateManyTodoListInputEnvelope;

    @Field(() => [TodoItemWhereUniqueInput], {nullable:true})
    @Type(() => TodoItemWhereUniqueInput)
    connect?: Array<TodoItemWhereUniqueInput>;
}
