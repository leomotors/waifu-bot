import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateInput } from './access-token-create.input';
import { AccessTokenUpdateInput } from './access-token-update.input';

@ArgsType()
export class UpsertOneAccessTokenArgs {

    @Field(() => AccessTokenWhereUniqueInput, {nullable:false})
    @Type(() => AccessTokenWhereUniqueInput)
    where!: AccessTokenWhereUniqueInput;

    @Field(() => AccessTokenCreateInput, {nullable:false})
    @Type(() => AccessTokenCreateInput)
    create!: AccessTokenCreateInput;

    @Field(() => AccessTokenUpdateInput, {nullable:false})
    @Type(() => AccessTokenUpdateInput)
    update!: AccessTokenUpdateInput;
}
