import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAccessTokenInput } from './user-create-without-access-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAccessTokenInput } from './user-create-or-connect-without-access-token.input';
import { UserUpsertWithoutAccessTokenInput } from './user-upsert-without-access-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAccessTokenInput } from './user-update-without-access-token.input';

@InputType()
export class UserUpdateOneRequiredWithoutAccessTokenNestedInput {

    @Field(() => UserCreateWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutAccessTokenInput)
    create?: UserCreateWithoutAccessTokenInput;

    @Field(() => UserCreateOrConnectWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccessTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput;

    @Field(() => UserUpsertWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserUpsertWithoutAccessTokenInput)
    upsert?: UserUpsertWithoutAccessTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserUpdateWithoutAccessTokenInput)
    update?: UserUpdateWithoutAccessTokenInput;
}
