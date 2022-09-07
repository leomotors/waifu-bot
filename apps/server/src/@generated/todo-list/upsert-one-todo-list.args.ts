import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';
import { Type } from 'class-transformer';
import { TodoListCreateInput } from './todo-list-create.input';
import { TodoListUpdateInput } from './todo-list-update.input';

@ArgsType()
export class UpsertOneTodoListArgs {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;

    @Field(() => TodoListCreateInput, {nullable:false})
    @Type(() => TodoListCreateInput)
    create!: TodoListCreateInput;

    @Field(() => TodoListUpdateInput, {nullable:false})
    @Type(() => TodoListUpdateInput)
    update!: TodoListUpdateInput;
}
