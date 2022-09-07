import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoListCreateManyOwnerInput } from './todo-list-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class TodoListCreateManyOwnerInputEnvelope {

    @Field(() => [TodoListCreateManyOwnerInput], {nullable:false})
    @Type(() => TodoListCreateManyOwnerInput)
    data!: Array<TodoListCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
