import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAccessTokenInput } from './user-create-without-access-token.input';

@InputType()
export class UserCreateOrConnectWithoutAccessTokenInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAccessTokenInput, {nullable:false})
    @Type(() => UserCreateWithoutAccessTokenInput)
    create!: UserCreateWithoutAccessTokenInput;
}
