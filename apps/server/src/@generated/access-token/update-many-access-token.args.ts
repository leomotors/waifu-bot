import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenUpdateManyMutationInput } from './access-token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AccessTokenWhereInput } from './access-token-where.input';

@ArgsType()
export class UpdateManyAccessTokenArgs {

    @Field(() => AccessTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => AccessTokenUpdateManyMutationInput)
    data!: AccessTokenUpdateManyMutationInput;

    @Field(() => AccessTokenWhereInput, {nullable:true})
    @Type(() => AccessTokenWhereInput)
    where?: AccessTokenWhereInput;
}
