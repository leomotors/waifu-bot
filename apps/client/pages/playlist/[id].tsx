import { useGetPlaylistQuery } from "$graphql";
import type { WaifuPage } from "$lib/types";

import Link from "next/link";
import { useRouter } from "next/router";

import { useMemo } from "react";

const PlaylistEditPage: WaifuPage = () => {
  const router = useRouter();

  const playlistId = router.query.id as string;

  const { data } = useGetPlaylistQuery({
    variables: {
      where: {
        id: +playlistId,
      },
    },
  });

  const playlist = useMemo(() => data?.playlist, [data?.playlist]);

  return (
    <main className="py-12 px-6">
      <div className="flex flex-row items-center gap-2 px-2">
        <Link href="/playlist">
          <a className="text-lg">{"< Back"}</a>
        </Link>
        <h1 className="text-3xl font-bold">Playlist: {playlist?.name}</h1>
      </div>
      <p className="mt-2 px-2 text-lg text-gray-700">{playlist?.description}</p>

      <hr className="my-4" />

      <p>content</p>
    </main>
  );
};

PlaylistEditPage.requiredAuth = true;

export default PlaylistEditPage;
