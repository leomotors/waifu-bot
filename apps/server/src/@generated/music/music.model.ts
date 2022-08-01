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

    @Field(() => [Playlist], {nullable:true})
    playlist?: Array<Playlist>;

    @Field(() => MusicCount, {nullable:false})
    _count?: MusicCount;
}
