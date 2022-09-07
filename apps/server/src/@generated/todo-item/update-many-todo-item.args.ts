import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemUpdateManyMutationInput } from './todo-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TodoItemWhereInput } from './todo-item-where.input';

@ArgsType()
export class UpdateManyTodoItemArgs {

    @Field(() => TodoItemUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoItemUpdateManyMutationInput)
    data!: TodoItemUpdateManyMutationInput;

    @Field(() => TodoItemWhereInput, {nullable:true})
    @Type(() => TodoItemWhereInput)
    where?: TodoItemWhereInput;
}
