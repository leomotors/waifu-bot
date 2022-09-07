import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TodoListScalarWhereInput {

    @Field(() => [TodoListScalarWhereInput], {nullable:true})
    AND?: Array<TodoListScalarWhereInput>;

    @Field(() => [TodoListScalarWhereInput], {nullable:true})
    OR?: Array<TodoListScalarWhereInput>;

    @Field(() => [TodoListScalarWhereInput], {nullable:true})
    NOT?: Array<TodoListScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
