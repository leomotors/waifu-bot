import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MusicMinAggregate {

    @Field(() => String, {nullable:true})
    videoId?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    shortDescription?: string;

    @Field(() => String, {nullable:true})
    lengthSeconds?: string;

    @Field(() => String, {nullable:true})
    viewCount?: string;

    @Field(() => String, {nullable:true})
    authorName?: string;

    @Field(() => String, {nullable:true})
    authorChannelUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;
}
