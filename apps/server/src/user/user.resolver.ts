import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { AccessToken } from "@generated/access-token/access-token.model";
import { Playlist } from "@generated/playlist/playlist.model";
import { Profile } from "@generated/profile/profile.model";
import { CreateOneUserArgs } from "@generated/user/create-one-user.args";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
import { UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { UserCount } from "@generated/user/user-count.output";
import { User } from "@generated/user/user.model";

import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Query(() => [User])
    users(input?: FindManyUserArgs) {
        return this.service.findMany(input);
    }

    @Query(() => User, { nullable: true })
    user(@Args() input: FindUniqueUserArgs) {
        return this.service.findUnique(input);
    }

    @ResolveField(() => [Playlist])
    playlist(@Parent() user: User) {
        return this.service.playlistOfUser(user);
    }

    @ResolveField(() => AccessToken)
    accessToken(@Parent() user: User) {
        return this.service.accessTokenOfUser(user);
    }

    @ResolveField(() => Profile)
    profile(@Parent() user: User) {
        return this.service.profileOfUser(user);
    }

    @ResolveField(() => UserCount)
    _count(@Parent() user: User) {
        return { playlist: this.service.countPlaylists(user) };
    }

    @Mutation(() => User)
    createUser(@Args() input: CreateOneUserArgs) {
        return this.service.create(input);
    }

    @Mutation(() => User)
    updateUser(@Args() input: UpdateOneUserArgs) {
        return this.service.update(input);
    }
}
