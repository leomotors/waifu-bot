import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MusicMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    videoId?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    shortDescription?: true;

    @Field(() => Boolean, {nullable:true})
    lengthSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;

    @Field(() => Boolean, {nullable:true})
    authorName?: true;

    @Field(() => Boolean, {nullable:true})
    authorChannelUrl?: true;

    @Field(() => Boolean, {nullable:true})
    thumbnailUrl?: true;

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
