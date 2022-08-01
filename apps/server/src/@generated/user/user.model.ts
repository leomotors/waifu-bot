import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Playlist } from '../playlist/playlist.model';
import { AccessToken } from '../access-token/access-token.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Playlist], {nullable:true})
    playlist?: Array<Playlist>;

    @Field(() => AccessToken, {nullable:true})
    accessToken?: AccessToken | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
