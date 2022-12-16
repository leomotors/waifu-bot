import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";

import { ProfileCreateWithoutUserInput } from "@generated/profile/profile-create-without-user.input";
import { UpdateOneUserArgs as _UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { UserCreateInput as _UserCreateInput } from "@generated/user/user-create.input";
import { UserUpdateInput as _UserUpdateInput } from "@generated/user/user-update.input";
import { Type } from "class-transformer";

@InputType()
export class UserCreateInput extends OmitType(_UserCreateInput, [
  "profile",
] as const) {
  @Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  profile?: ProfileCreateWithoutUserInput;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput)
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
}

@InputType()
class ProfileUpdateInput extends ProfileCreateWithoutUserInput {}

@InputType()
export class UserUpdateInput extends OmitType(_UserUpdateInput, [
  "profile",
] as const) {
  @Field(() => ProfileUpdateInput, { nullable: true })
  profile?: ProfileUpdateInput;
}

@ArgsType()
export class UpdateOneUserArgs extends OmitType(_UpdateOneUserArgs, [
  "data",
] as const) {
  @Field(() => UserUpdateInput)
  data!: UserUpdateInput;
}

@InputType()
export class UserUpsertInput {
  @Field()
  id!: string;

  @Field(() => ProfileUpdateInput)
  profile!: ProfileUpdateInput;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserUpsertInput)
  data!: UserUpsertInput;
}
