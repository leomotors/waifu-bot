import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateOrConnectWithoutUserInput } from './access-token-create-or-connect-without-user.input';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';

@InputType()
export class AccessTokenCreateNestedOneWithoutUserInput {

    @Field(() => AccessTokenCreateWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create?: AccessTokenCreateWithoutUserInput;

    @Field(() => AccessTokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput;

    @Field(() => AccessTokenWhereUniqueInput, {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    connect?: AccessTokenWhereUniqueInput;
}
