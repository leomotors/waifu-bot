import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaylistUncheckedCreateNestedManyWithoutOwnerInput } from '../playlist/playlist-unchecked-create-nested-many-without-owner.input';
import { AccessTokenUncheckedCreateNestedOneWithoutUserInput } from '../access-token/access-token-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlaylistUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    playlist?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => AccessTokenUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    accessToken?: AccessTokenUncheckedCreateNestedOneWithoutUserInput;
}