import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListWhereInput } from './todo-list-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTodoListArgs {

    @Field(() => TodoListWhereInput, {nullable:true})
    @Type(() => TodoListWhereInput)
    where?: TodoListWhereInput;
}
