import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAccessTokenInput } from './user-update-without-access-token.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAccessTokenInput } from './user-create-without-access-token.input';

@InputType()
export class UserUpsertWithoutAccessTokenInput {

    @Field(() => UserUpdateWithoutAccessTokenInput, {nullable:false})
    @Type(() => UserUpdateWithoutAccessTokenInput)
    update!: UserUpdateWithoutAccessTokenInput;

    @Field(() => UserCreateWithoutAccessTokenInput, {nullable:false})
    @Type(() => UserCreateWithoutAccessTokenInput)
    create!: UserCreateWithoutAccessTokenInput;
}
