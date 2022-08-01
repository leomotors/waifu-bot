import type { GetMyInfoQuery } from "$graphql";

import Image from "next/image";

import type { FC } from "react";

type ProfileCardProps = NonNullable<GetMyInfoQuery["me"]> & {
  profile: NonNullable<GetMyInfoQuery["me"]["profile"]>;
};

export const ProfileCard: FC<ProfileCardProps> = ({
  id,
  profile,
  createdAt,
  updatedAt,
  _count,
}) => {
  return (
    <div className="flex w-fit flex-col items-center rounded-xl bg-gradient-to-br from-green-100 to-green-200 p-4 text-lg font-semibold">
      <Image
        src={profile.avatarUrl}
        alt="Discord Avatar"
        width="150"
        height="150"
        className="rounded-full"
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
