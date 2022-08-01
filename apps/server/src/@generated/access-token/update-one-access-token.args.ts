import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenUpdateInput } from './access-token-update.input';
import { Type } from 'class-transformer';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';

@ArgsType()
export class UpdateOneAccessTokenArgs {

    @Field(() => AccessTokenUpdateInput, {nullable:false})
    @Type(() => AccessTokenUpdateInput)
    data!: AccessTokenUpdateInput;

    @Field(() => AccessTokenWhereUniqueInput, {nullable:false})
    @Type(() => AccessTokenWhereUniqueInput)
    where!: AccessTokenWhereUniqueInput;
}
