import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Music } from '../music/music.model';
import { PlaylistCount } from './playlist-count.output';

@ObjectType()
export class Playlist {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => [Music], {nullable:true})
    music?: Array<Music>;

    @Field(() => PlaylistCount, {nullable:false})
    _count?: PlaylistCount;
}