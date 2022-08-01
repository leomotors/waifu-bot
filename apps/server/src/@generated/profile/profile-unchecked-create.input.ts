import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    lastInteractGuildName!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;
}
