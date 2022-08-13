import styles from "$styles/components.module.scss";

import {
  useCreateUserPlaylistMutation,
  useGetMyPlaylistsQuery,
} from "$graphql";
import { trim } from "$lib/string";
import type { WaifuPage } from "$lib/types";

import Link from "next/link";

import { useMemo, useState } from "react";
import { PencilSquare, PlusCircle, XCircle } from "react-bootstrap-icons";

import clsx from "clsx";

const PlayListPage: WaifuPage = () => {
  const { data: raw, refetch: refetchPlaylists } = useGetMyPlaylistsQuery();

  const playlists = useMemo(() => raw?.me.playlist, [raw?.me.playlist]);

  // #region CREATE_FORM
  const [createMode, setCreateMode] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // #endregion CREATE_FORM

  const [createPlaylist] = useCreateUserPlaylistMutation();

  function closeForm() {
    setCreateMode(false);
    setName("");
    setDescription("");
  }

  async function handleCreate() {
    await createPlaylist({
      variables: {
        data: {
          name,
          description,
        },
      },
    });

    closeForm();

    await refetchPlaylists();
  }

  return (
    <main className="flex flex-col items-center py-12">
      <h1 className="page-title">My Playlists</h1>
      <hr className="my-12 w-[90%]" />

      <div className="flex flex-col items-center gap-4">
        <button
          className={clsx(
            "flex flex-row items-center gap-2 self-end rounded-lg border border-green-500  py-2 px-4 transition-colors",
            createMode
              ? "hover:border-green-400"
              : "bg-green-300 hover:bg-green-200"
          )}
          onClick={() =>
            createMode ? closeForm() : setCreateMode(!createMode)
          }
        >
          {createMode ? <XCircle /> : <PlusCircle />}
          <p className="text-lg">
            {createMode ? "Discard" : "Create Playlist"}
          </p>
        </button>

        {createMode && (
          <div
            className={clsx(
              "flex w-full flex-col gap-4 rounded-xl border border-gray-500 bg-neutral-300 p-4",
              styles.waifuForm
            )}
          >
            <p className="text-2xl font-bold">Create</p>

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />

            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />

            <button
              className="self-end rounded-lg border border-rose-400 bg-rose-300 px-4 py-2 text-lg font-bold transition-colors hover:bg-rose-200 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-800"
              disabled={!name || !description}
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        )}

        <table className={styles.waifuTable}>
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
      </div>
    </main>
  );
};

PlayListPage.requiredAuth = true;

export default PlayListPage;
