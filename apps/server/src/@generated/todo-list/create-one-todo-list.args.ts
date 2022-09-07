import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListCreateInput } from './todo-list-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTodoListArgs {

    @Field(() => TodoListCreateInput, {nullable:false})
    @Type(() => TodoListCreateInput)
    data!: TodoListCreateInput;
}
