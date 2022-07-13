import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateOneUserArgs } from "@generated/user/create-one-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
import { UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { User } from "@generated/user/user.model";

import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Query(() => [User])
    users() {
        return this.service.findMany();
    }

    @Query(() => User)
    user(@Args() input: FindUniqueUserArgs) {
        return this.service.findUnique(input);
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
