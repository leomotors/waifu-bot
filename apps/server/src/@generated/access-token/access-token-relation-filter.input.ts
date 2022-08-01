import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';

@InputType()
export class AccessTokenRelationFilter {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    is?: AccessTokenWhereInput;

    @Field(() => AccessTokenWhereInput, {nullable:true})
    isNot?: AccessTokenWhereInput;
}
