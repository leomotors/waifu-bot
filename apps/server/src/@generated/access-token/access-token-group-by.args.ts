import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';
import { Type } from 'class-transformer';
import { AccessTokenOrderByWithAggregationInput } from './access-token-order-by-with-aggregation.input';
import { AccessTokenScalarFieldEnum } from './access-token-scalar-field.enum';
import { AccessTokenScalarWhereWithAggregatesInput } from './access-token-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AccessTokenCountAggregateInput } from './access-token-count-aggregate.input';
import { AccessTokenMinAggregateInput } from './access-token-min-aggregate.input';
import { AccessTokenMaxAggregateInput } from './access-token-max-aggregate.input';

@ArgsType()
export class AccessTokenGroupByArgs {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    @Type(() => AccessTokenWhereInput)
    where?: AccessTokenWhereInput;

    @Field(() => [AccessTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccessTokenOrderByWithAggregationInput>;

    @Field(() => [AccessTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccessTokenScalarFieldEnum>;

    @Field(() => AccessTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: AccessTokenScalarWhereWithAggregatesInput;

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
