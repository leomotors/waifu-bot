import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemCreateInput } from './todo-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTodoItemArgs {

    @Field(() => TodoItemCreateInput, {nullable:false})
    @Type(() => TodoItemCreateInput)
    data!: TodoItemCreateInput;
}
