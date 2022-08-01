import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AccessTokenWhereInput {

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    AND?: Array<AccessTokenWhereInput>;

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    OR?: Array<AccessTokenWhereInput>;

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    NOT?: Array<AccessTokenWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    issued?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
