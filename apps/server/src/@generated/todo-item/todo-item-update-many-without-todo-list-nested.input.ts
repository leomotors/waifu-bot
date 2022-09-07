import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemCreateWithoutTodoListInput } from './todo-item-create-without-todo-list.input';
import { Type } from 'class-transformer';
import { TodoItemCreateOrConnectWithoutTodoListInput } from './todo-item-create-or-connect-without-todo-list.input';
import { TodoItemUpsertWithWhereUniqueWithoutTodoListInput } from './todo-item-upsert-with-where-unique-without-todo-list.input';
import { TodoItemCreateManyTodoListInputEnvelope } from './todo-item-create-many-todo-list-input-envelope.input';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { TodoItemUpdateWithWhereUniqueWithoutTodoListInput } from './todo-item-update-with-where-unique-without-todo-list.input';
import { TodoItemUpdateManyWithWhereWithoutTodoListInput } from './todo-item-update-many-with-where-without-todo-list.input';
import { TodoItemScalarWhereInput } from './todo-item-scalar-where.input';

@InputType()
export class TodoItemUpdateManyWithoutTodoListNestedInput {

    @Field(() => [TodoItemCreateWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemCreateWithoutTodoListInput)
    create?: Array<TodoItemCreateWithoutTodoListInput>;

    @Field(() => [TodoItemCreateOrConnectWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemCreateOrConnectWithoutTodoListInput)
    connectOrCreate?: Array<TodoItemCreateOrConnectWithoutTodoListInput>;

    @Field(() => [TodoItemUpsertWithWhereUniqueWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemUpsertWithWhereUniqueWithoutTodoListInput)
    upsert?: Array<TodoItemUpsertWithWhereUniqueWithoutTodoListInput>;

    @Field(() => TodoItemCreateManyTodoListInputEnvelope, {nullable:true})
    @Type(() => TodoItemCreateManyTodoListInputEnvelope)
    createMany?: TodoItemCreateManyTodoListInputEnvelope;

    @Field(() => [TodoItemWhereUniqueInput], {nullable:true})
    @Type(() => TodoItemWhereUniqueInput)
    set?: Array<TodoItemWhereUniqueInput>;

    @Field(() => [TodoItemWhereUniqueInput], {nullable:true})
    @Type(() => TodoItemWhereUniqueInput)
    disconnect?: Array<TodoItemWhereUniqueInput>;

    @Field(() => [TodoItemWhereUniqueInput], {nullable:true})
    @Type(() => TodoItemWhereUniqueInput)
    delete?: Array<TodoItemWhereUniqueInput>;

    @Field(() => [TodoItemWhereUniqueInput], {nullable:true})
    @Type(() => TodoItemWhereUniqueInput)
    connect?: Array<TodoItemWhereUniqueInput>;

    @Field(() => [TodoItemUpdateWithWhereUniqueWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemUpdateWithWhereUniqueWithoutTodoListInput)
    update?: Array<TodoItemUpdateWithWhereUniqueWithoutTodoListInput>;

    @Field(() => [TodoItemUpdateManyWithWhereWithoutTodoListInput], {nullable:true})
    @Type(() => TodoItemUpdateManyWithWhereWithoutTodoListInput)
    updateMany?: Array<TodoItemUpdateManyWithWhereWithoutTodoListInput>;

    @Field(() => [TodoItemScalarWhereInput], {nullable:true})
    @Type(() => TodoItemScalarWhereInput)
    deleteMany?: Array<TodoItemScalarWhereInput>;
}
