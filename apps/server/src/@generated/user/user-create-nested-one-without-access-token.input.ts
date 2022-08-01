import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAccessTokenInput } from './user-create-without-access-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAccessTokenInput } from './user-create-or-connect-without-access-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAccessTokenInput {

    @Field(() => UserCreateWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutAccessTokenInput)
    create?: UserCreateWithoutAccessTokenInput;

    @Field(() => UserCreateOrConnectWithoutAccessTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccessTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
