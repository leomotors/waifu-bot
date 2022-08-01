import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccessTokenMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    token?: true;

    @Field(() => Boolean, {nullable:true})
    issued?: true;

    @Field(() => Boolean, {nullable:true})
    expire?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
