import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccessTokenMaxAggregate {

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    issued?: Date | string;

    @Field(() => Date, {nullable:true})
    expire?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
