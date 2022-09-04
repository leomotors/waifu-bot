import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MusicMaxAggregate {

    @Field(() => String, {nullable:true})
    videoId?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    shortDescription?: string;

    @Field(() => Int, {nullable:true})
    lengthSeconds?: number;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => String, {nullable:true})
    authorName?: string;

    @Field(() => String, {nullable:true})
    authorChannelUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
