import { FC } from "react";

import Image from "next/image";

import { useGetMyInfoQuery } from "@waifu-bot/graphql";

import { DiscordDefaultAvatarUrl } from "$lib/constants";

interface MiniProfileProps {
  user: NonNullable<ReturnType<typeof useGetMyInfoQuery>["data"]>["me"];
}

export const MiniProfile: FC<MiniProfileProps> = ({ user }) => {
  return (
    <div className="my-2 flex justify-center gap-2 rounded-lg bg-[rgba(255,255,255,0.4)] p-2">
      <div className="shrink-0 ">
        <Image
          alt="User Profile"
          className="rounded-full"
          height="50"
          src={user.profile?.avatarUrl ?? DiscordDefaultAvatarUrl}
          width="50"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold">
          {user.profile?.username ?? "<undefined>"}
        </p>
        <p className="text-slate-700">{user.id}</p>
      </div>
    </div>
  );
};
