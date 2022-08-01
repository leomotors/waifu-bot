import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileWhereUniqueInput {

    @Field(() => String, {nullable:true})
    userId?: string;
}
