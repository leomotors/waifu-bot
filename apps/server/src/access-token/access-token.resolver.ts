import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { AccessToken } from "@generated/access-token/access-token.model";
import { FindManyAccessTokenArgs } from "@generated/access-token/find-many-access-token.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
import { User } from "@generated/user/user.model";

import { AccessTokenService } from "./access-token.service";

@Resolver(() => AccessToken)
export class AccessTokenResolver {
    constructor(private readonly service: AccessTokenService) {}

    @Query(() => [AccessToken])
    accessTokens(@Args() input?: FindManyAccessTokenArgs) {
        return this.service.findMany(input);
    }

    @ResolveField(() => User)
    user(@Parent() accessToken: AccessToken) {
        return this.service.userOfToken(accessToken);
    }

    @Mutation(() => AccessToken)
    generateToken(@Args() input: FindUniqueUserArgs) {
        return this.service.generateToken(input);
    }
}
