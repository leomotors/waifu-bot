import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccessTokenUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    issued?: Date | string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
