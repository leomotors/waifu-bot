import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenCreateInput } from './access-token-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAccessTokenArgs {

    @Field(() => AccessTokenCreateInput, {nullable:false})
    @Type(() => AccessTokenCreateInput)
    data!: AccessTokenCreateInput;
}
