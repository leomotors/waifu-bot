import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MusicUncheckedCreateWithoutPlaylistInput {

    @Field(() => String, {nullable:false})
    videoId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    shortDescription!: string;

    @Field(() => String, {nullable:false})
    lengthSeconds!: string;

    @Field(() => String, {nullable:false})
    viewCount!: string;

    @Field(() => String, {nullable:false})
    authorName!: string;

    @Field(() => String, {nullable:false})
    authorChannelUrl!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;
}
