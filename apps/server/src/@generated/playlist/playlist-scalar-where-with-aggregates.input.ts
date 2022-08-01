import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PlaylistScalarWhereWithAggregatesInput {

    @Field(() => [PlaylistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlaylistScalarWhereWithAggregatesInput>;

    @Field(() => [PlaylistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlaylistScalarWhereWithAggregatesInput>;

    @Field(() => [PlaylistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlaylistScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ownerId?: StringWithAggregatesFilter;
}
