import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { CreateOneProfileArgs } from "@generated/profile/create-one-profile.args";
import { FindManyProfileArgs } from "@generated/profile/find-many-profile.args";
import { FindUniqueProfileArgs } from "@generated/profile/find-unique-profile.args";
import { Profile } from "@generated/profile/profile.model";
import { User } from "@generated/user/user.model";

import { ProfileService } from "./profile.service";

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly service: ProfileService) {}

  @Query(() => [Profile])
  profiles(@Args() input?: FindManyProfileArgs) {
    return this.service.findMany(input);
  }

  @Query(() => Profile, { nullable: true })
  profile(@Args() input: FindUniqueProfileArgs) {
    return this.service.findUnique(input);
  }

  @ResolveField(() => User)
  user(@Parent() profile: Profile) {
    return this.service.userOfProfile(profile);
  }

  @Mutation(() => Profile)
  createProfile(@Args() input: CreateOneProfileArgs) {
    return this.service.create(input);
  }
}
