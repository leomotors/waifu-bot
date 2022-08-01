import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';
import { Type } from 'class-transformer';
import { AccessTokenOrderByWithRelationInput } from './access-token-order-by-with-relation.input';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccessTokenScalarFieldEnum } from './access-token-scalar-field.enum';

@ArgsType()
export class FindFirstAccessTokenArgs {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    @Type(() => AccessTokenWhereInput)
    where?: AccessTokenWhereInput;

    @Field(() => [AccessTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccessTokenOrderByWithRelationInput>;

    @Field(() => AccessTokenWhereUniqueInput, {nullable:true})
    cursor?: AccessTokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AccessTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccessTokenScalarFieldEnum>;
}
