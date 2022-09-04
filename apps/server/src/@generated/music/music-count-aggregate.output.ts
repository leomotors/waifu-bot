import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MusicCountAggregate {

    @Field(() => Int, {nullable:false})
    videoId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    shortDescription!: number;

    @Field(() => Int, {nullable:false})
    lengthSeconds!: number;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => Int, {nullable:false})
    authorName!: number;

    @Field(() => Int, {nullable:false})
    authorChannelUrl!: number;

    @Field(() => Int, {nullable:false})
    thumbnailUrl!: number;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
