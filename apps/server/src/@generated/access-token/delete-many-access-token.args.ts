import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAccessTokenArgs {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    @Type(() => AccessTokenWhereInput)
    where?: AccessTokenWhereInput;
}
