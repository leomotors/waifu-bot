import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';
import { Type } from 'class-transformer';
import { AccessTokenOrderByWithRelationInput } from './access-token-order-by-with-relation.input';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccessTokenCountAggregateInput } from './access-token-count-aggregate.input';
import { AccessTokenMinAggregateInput } from './access-token-min-aggregate.input';
import { AccessTokenMaxAggregateInput } from './access-token-max-aggregate.input';

@ArgsType()
export class AccessTokenAggregateArgs {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    @Type(() => AccessTokenWhereInput)
    where?: AccessTokenWhereInput;

    @Field(() => [AccessTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccessTokenOrderByWithRelationInput>;

    @Field(() => AccessTokenWhereUniqueInput, {nullable:true})
    cursor?: AccessTokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AccessTokenCountAggregateInput, {nullable:true})
    _count?: AccessTokenCountAggregateInput;

    @Field(() => AccessTokenMinAggregateInput, {nullable:true})
    _min?: AccessTokenMinAggregateInput;

    @Field(() => AccessTokenMaxAggregateInput, {nullable:true})
    _max?: AccessTokenMaxAggregateInput;
}
