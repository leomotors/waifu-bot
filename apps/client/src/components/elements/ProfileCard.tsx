import type { GetMyInfoQuery } from "@waifu-bot/graphql";

import Image from "next/image";

import type { FC } from "react";

type ProfileCardProps = NonNullable<GetMyInfoQuery["me"]> & {
  profile: NonNullable<GetMyInfoQuery["me"]["profile"]>;
};

export const ProfileCard: FC<ProfileCardProps> = ({
  _count,
  createdAt,
  id,
  profile,
  updatedAt,
}) => {
  return (
    <div className="flex w-fit flex-col items-center rounded-xl bg-gradient-to-br from-green-100 to-green-200 p-4 text-lg font-semibold">
      <Image
        alt="Discord Avatar"
        className="rounded-full"
        height="150"
        src={profile.avatarUrl}
        width="150"
      />

      <p>Name: {profile.username}</p>
      <p>User ID: {id}</p>
      <p>Last Guild: {profile.lastInteractGuildName}</p>

      <p>Registered At: {createdAt}</p>
      <p>Updated At: {updatedAt}</p>
      <p>Playlist Count: {_count.playlist}</p>
    </div>
  );
};
