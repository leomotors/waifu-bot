import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaylistUpdateManyWithoutOwnerNestedInput } from '../playlist/playlist-update-many-without-owner-nested.input';
import { AccessTokenUpdateOneWithoutUserNestedInput } from '../access-token/access-token-update-one-without-user-nested.input';

@InputType()
export class UserUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaylistUpdateManyWithoutOwnerNestedInput, {nullable:true})
    playlist?: PlaylistUpdateManyWithoutOwnerNestedInput;

    @Field(() => AccessTokenUpdateOneWithoutUserNestedInput, {nullable:true})
    accessToken?: AccessTokenUpdateOneWithoutUserNestedInput;
}
