import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccessTokenWhereUniqueInput {

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
