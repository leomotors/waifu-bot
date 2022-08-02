import { ProfileCard } from "$components/elements/ProfileCard";
import { useGetMyInfoQuery } from "$graphql";
import type { WaifuPage } from "$lib/types";

import { useMemo } from "react";

const ProfilePage: WaifuPage = () => {
  const { data, error } = useGetMyInfoQuery();

  const me = useMemo(() => data?.me, [data?.me]);

  return (
    <main className="flex flex-col items-center gap-8 py-12">
      <h1 className="page-title">My Profile</h1>

      <div className="p-4">
        {error?.message == "Unauthorized" ? (
          <p>Unauthorized</p>
        ) : me?.profile ? (
          // @ts-expect-error too complicated, muck it
          <ProfileCard {...me} />
        ) : (
          <p>My name is {me?.profile?.username} and I don't have profile</p>
        )}
      </div>
    </main>
  );
};

ProfilePage.requiredAuth = true;

export default ProfilePage;
