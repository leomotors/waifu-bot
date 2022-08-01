import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ProfileUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastInteractGuildName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    avatarUrl?: StringFieldUpdateOperationsInput;
}
