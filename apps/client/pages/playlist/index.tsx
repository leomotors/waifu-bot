import tableStyles from "$styles/table.module.scss";

import { useGetMyPlaylistsQuery } from "$graphql";
import { trim } from "$lib/string";
import type { WaifuPage } from "$lib/types";

import Link from "next/link";

import { useMemo } from "react";
import { PencilSquare } from "react-bootstrap-icons";

const PlayListPage: WaifuPage = () => {
  const { data: raw } = useGetMyPlaylistsQuery();

  const playlists = useMemo(() => raw?.me.playlist, [raw?.me.playlist]);

  return (
    <main className="py-12">
      <h1 className="page-title">My Playlists</h1>
      <hr className="m-12" />

      <table className={tableStyles.waifuTable}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Music Count</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {playlists?.map((playlist) => (
            <tr key={`playlist-table-${playlist.id}`}>
              <td>{playlist.id}</td>
              <td>{playlist.name}</td>
              <td>{trim(playlist.description ?? "", 50)}</td>
              <td>{playlist._count.music}</td>
              <td>
                <div className="flex items-center justify-center">
                  <Link href={`/playlist/${playlist.id}`}>
                    <PencilSquare className="h-5 w-5 cursor-pointer" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

PlayListPage.requiredAuth = true;

export default PlayListPage;
