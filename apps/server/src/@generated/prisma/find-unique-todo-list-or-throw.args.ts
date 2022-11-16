import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListWhereUniqueInput } from '../todo-list/todo-list-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTodoListOrThrowArgs {

    @Field(() => TodoListWhereUniqueInput, {nullable:false})
    @Type(() => TodoListWhereUniqueInput)
    where!: TodoListWhereUniqueInput;
}
