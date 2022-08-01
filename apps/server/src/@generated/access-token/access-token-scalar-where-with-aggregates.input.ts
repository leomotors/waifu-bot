import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AccessTokenScalarWhereWithAggregatesInput {

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issued?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expire?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
