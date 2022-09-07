import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoListCreateManyInput } from './todo-list-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTodoListArgs {

    @Field(() => [TodoListCreateManyInput], {nullable:false})
    @Type(() => TodoListCreateManyInput)
    data!: Array<TodoListCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
