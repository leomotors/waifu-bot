import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Playlist } from '../playlist/playlist.model';
import { MusicCount } from './music-count.output';

@ObjectType()
export class Music {

    @Field(() => ID, {nullable:false})
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

    @Field(() => [Playlist], {nullable:true})
    playlist?: Array<Playlist>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => MusicCount, {nullable:false})
    _count?: MusicCount;
}
