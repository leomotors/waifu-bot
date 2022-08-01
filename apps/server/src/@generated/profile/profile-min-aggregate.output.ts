import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    lastInteractGuildName?: string;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;
}
