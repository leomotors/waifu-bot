import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    lastInteractGuildName!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;
}
