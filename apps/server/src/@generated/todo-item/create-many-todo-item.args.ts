import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoItemCreateManyInput } from './todo-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTodoItemArgs {

    @Field(() => [TodoItemCreateManyInput], {nullable:false})
    @Type(() => TodoItemCreateManyInput)
    data!: Array<TodoItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
