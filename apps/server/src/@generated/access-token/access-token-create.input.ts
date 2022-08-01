import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAccessTokenInput } from '../user/user-create-nested-one-without-access-token.input';

@InputType()
export class AccessTokenCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    issued?: Date | string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => UserCreateNestedOneWithoutAccessTokenInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAccessTokenInput;
}
