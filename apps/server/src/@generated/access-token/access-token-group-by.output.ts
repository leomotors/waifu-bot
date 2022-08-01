import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccessTokenCountAggregate } from './access-token-count-aggregate.output';
import { AccessTokenMinAggregate } from './access-token-min-aggregate.output';
import { AccessTokenMaxAggregate } from './access-token-max-aggregate.output';

@ObjectType()
export class AccessTokenGroupBy {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    issued!: Date | string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => AccessTokenCountAggregate, {nullable:true})
    _count?: AccessTokenCountAggregate;

    @Field(() => AccessTokenMinAggregate, {nullable:true})
    _min?: AccessTokenMinAggregate;

    @Field(() => AccessTokenMaxAggregate, {nullable:true})
    _max?: AccessTokenMaxAggregate;
}
