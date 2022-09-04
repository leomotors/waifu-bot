import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MusicSumAggregate {

    @Field(() => Int, {nullable:true})
    lengthSeconds?: number;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => Int, {nullable:true})
    likes?: number;
}
