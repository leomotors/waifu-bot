import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListUpdateManyMutationInput } from './todo-list-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TodoListWhereInput } from './todo-list-where.input';

@ArgsType()
export class UpdateManyTodoListArgs {

    @Field(() => TodoListUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoListUpdateManyMutationInput)
    data!: TodoListUpdateManyMutationInput;

    @Field(() => TodoListWhereInput, {nullable:true})
    @Type(() => TodoListWhereInput)
    where?: TodoListWhereInput;
}
