import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    lastInteractGuildName!: number;

    @Field(() => Int, {nullable:false})
    avatarUrl!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
