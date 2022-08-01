import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateOrConnectWithoutUserInput } from './access-token-create-or-connect-without-user.input';
import { AccessTokenUpsertWithoutUserInput } from './access-token-upsert-without-user.input';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { AccessTokenUpdateWithoutUserInput } from './access-token-update-without-user.input';

@InputType()
export class AccessTokenUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => AccessTokenCreateWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create?: AccessTokenCreateWithoutUserInput;

    @Field(() => AccessTokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput;

    @Field(() => AccessTokenUpsertWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenUpsertWithoutUserInput)
    upsert?: AccessTokenUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AccessTokenWhereUniqueInput, {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    connect?: AccessTokenWhereUniqueInput;

    @Field(() => AccessTokenUpdateWithoutUserInput, {nullable:true})
    @Type(() => AccessTokenUpdateWithoutUserInput)
    update?: AccessTokenUpdateWithoutUserInput;
}
