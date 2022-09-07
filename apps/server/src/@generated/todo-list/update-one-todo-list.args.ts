import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListUpdateInput } from './todo-list-update.input';
import { Type } from 'class-transformer';
import { TodoListWhereUniqueInput } from './todo-list-where-unique.input';

@ArgsType()
export class UpdateOneTodoListArgs {

    @Field(() => TodoListUpdateInput, {nullable:false})
    @Type(() => TodoListUpdateInput)
    data!: TodoListUpdateInput;

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;
}
