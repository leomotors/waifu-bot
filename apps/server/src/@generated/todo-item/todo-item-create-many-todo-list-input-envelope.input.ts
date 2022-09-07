import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoItemCreateManyTodoListInput } from './todo-item-create-many-todo-list.input';
import { Type } from 'class-transformer';

@InputType()
export class TodoItemCreateManyTodoListInputEnvelope {

    @Field(() => [TodoItemCreateManyTodoListInput], {nullable:false})
    @Type(() => TodoItemCreateManyTodoListInput)
    data!: Array<TodoItemCreateManyTodoListInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
