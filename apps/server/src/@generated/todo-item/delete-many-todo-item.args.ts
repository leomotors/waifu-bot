import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereInput } from './todo-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTodoItemArgs {

    @Field(() => TodoItemWhereInput, {nullable:true})
    @Type(() => TodoItemWhereInput)
    where?: TodoItemWhereInput;
}
