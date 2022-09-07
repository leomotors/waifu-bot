import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemWhereUniqueInput } from './todo-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTodoItemArgs {

    @Field(() => TodoItemWhereUniqueInput, {nullable:false})
    @Type(() => TodoItemWhereUniqueInput)
    where!: TodoItemWhereUniqueInput;
}
