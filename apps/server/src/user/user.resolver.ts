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
import { TodoList } from "@generated/todo-list/todo-list.model";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
import { UserCount } from "@generated/user/user-count.output";
import { User } from "@generated/user/user.model";

import { Permission } from "src/auth/auth.decorator";

import {
  CreateOneUserArgs,
  UpdateOneUserArgs,
  UpsertOneUserArgs,
} from "./dto/user.dto";
import { UserAdapter } from "./user.adapter";
import { UserContext } from "./user.decorator";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
    private readonly adapter: UserAdapter
  ) {}

  @Query(() => [User])
  users(input?: FindManyUserArgs) {
    return this.service.findMany(input);
  }

  @Query(() => User, { nullable: true })
  user(@Args() input: FindUniqueUserArgs) {
    return this.service.findUnique(input);
  }

  @Query(() => User)
  @Permission("User")
  me(@UserContext() user: User) {
    return user;
  }

  @Mutation(() => User)
  createUser(@Args() input: CreateOneUserArgs) {
    return this.service.create(this.adapter.createUser(input));
  }

  @Mutation(() => User)
  updateUser(@Args() input: UpdateOneUserArgs) {
    return this.service.update(this.adapter.updateUser(input));
  }

  @Mutation(() => User)
  upsertUser(@Args() input: UpsertOneUserArgs) {
    return this.service.upsertUser(this.adapter.upsertUser(input));
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
    return this.service._count(user);
  }

  @ResolveField(() => [TodoList])
  todoListsOwned(@Parent() user: User) {
    return this.service.todoListsOwned(user);
  }

  @ResolveField(() => [TodoList])
  todoListsCollaborated(@Parent() user: User) {
    return this.service.todoListsCollaborated(user);
  }
}
