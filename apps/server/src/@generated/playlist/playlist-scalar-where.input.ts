import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PlaylistScalarWhereInput {

    @Field(() => [PlaylistScalarWhereInput], {nullable:true})
    AND?: Array<PlaylistScalarWhereInput>;

    @Field(() => [PlaylistScalarWhereInput], {nullable:true})
    OR?: Array<PlaylistScalarWhereInput>;

    @Field(() => [PlaylistScalarWhereInput], {nullable:true})
    NOT?: Array<PlaylistScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    ownerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
