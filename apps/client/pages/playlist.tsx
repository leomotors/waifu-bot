import { useGetMyPlaylistsQuery } from "$graphql";
import type { WaifuPage } from "$lib/types";

import { useMemo } from "react";

const PlayListPage: WaifuPage = () => {
  const { data: raw } = useGetMyPlaylistsQuery();

  const playlists = useMemo(() => raw?.me.playlist, [raw?.me.playlist]);

  return (
    <main>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Music Count</th>
        </thead>
        <tbody>
          {playlists?.map((playlist) => (
            <tr key={`playlist-table-${playlist.id}`}>
              <td>{playlist.id}</td>
              <td>{playlist.name}</td>
              <td>{playlist._count.music}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

PlayListPage.requiredAuth = true;

export default PlayListPage;
