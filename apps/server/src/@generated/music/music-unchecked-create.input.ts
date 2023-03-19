import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaylistUncheckedCreateNestedManyWithoutMusicInput } from '../playlist/playlist-unchecked-create-nested-many-without-music.input';

@InputType()
export class MusicUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    videoId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    shortDescription!: string;

    @Field(() => Int, {nullable:false})
    lengthSeconds!: number;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => String, {nullable:false})
    authorName!: string;

    @Field(() => String, {nullable:false})
    authorChannelUrl!: string;

    @Field(() => String, {nullable:false})
    thumbnailUrl!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlaylistUncheckedCreateNestedManyWithoutMusicInput, {nullable:true})
    playlist?: PlaylistUncheckedCreateNestedManyWithoutMusicInput;
}
