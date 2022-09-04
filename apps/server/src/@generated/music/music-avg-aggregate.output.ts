import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MusicAvgAggregate {

    @Field(() => Float, {nullable:true})
    lengthSeconds?: number;

    @Field(() => Float, {nullable:true})
    viewCount?: number;

    @Field(() => Float, {nullable:true})
    likes?: number;
}
