import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccessTokenCreateManyInput } from './access-token-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAccessTokenArgs {

    @Field(() => [AccessTokenCreateManyInput], {nullable:false})
    @Type(() => AccessTokenCreateManyInput)
    data!: Array<AccessTokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
