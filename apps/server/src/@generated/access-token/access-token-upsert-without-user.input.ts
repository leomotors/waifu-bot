import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenUpdateWithoutUserInput } from './access-token-update-without-user.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';

@InputType()
export class AccessTokenUpsertWithoutUserInput {

    @Field(() => AccessTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccessTokenUpdateWithoutUserInput)
    update!: AccessTokenUpdateWithoutUserInput;

    @Field(() => AccessTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create!: AccessTokenCreateWithoutUserInput;
}
