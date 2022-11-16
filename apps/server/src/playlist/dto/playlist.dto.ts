import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";

import { PlaylistCreateWithoutOwnerInput } from "@generated/playlist/playlist-create-without-owner.input";

@ArgsType()
export class CreateOneUserPlaylistArgs {
  @Field(() => PlaylistCreateWithoutOwnerInput, { nullable: false })
  data!: PlaylistCreateWithoutOwnerInput;
}
