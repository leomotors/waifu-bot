import styles from "$styles/components.module.scss";

import { formatTime } from "$lib/time";
import type { WaifuPage } from "$lib/types";
import { validateURL } from "$lib/ytdl-utils";

import type { ApolloError } from "@apollo/client";
import { YoutubeURLPrefix } from "@waifu-bot/constants";
import {
  useAddMusicToPlaylistMutation,
  useGetPlaylistQuery,
  useRemoveMusicFromPlaylistMutation,
} from "@waifu-bot/graphql";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useMemo, useState } from "react";
import { Trash } from "react-bootstrap-icons";

import clsx from "clsx";

const PlaylistEditPage: WaifuPage = () => {
  const router = useRouter();

  const playlistId = router.query.id as string;

  const { data, refetch: refetchMusics } = useGetPlaylistQuery({
    variables: {
      where: {
        id: +playlistId,
      },
    },
  });

  const playlist = useMemo(() => data?.playlist, [data?.playlist]);

  const [addMusic] = useAddMusicToPlaylistMutation();
  const [removeMusic] = useRemoveMusicFromPlaylistMutation();

  const [musicUrl, setMusicUrl] = useState("");
  const [error, setError] = useState("");

  async function handleAddMusic() {
    setMusicUrl("");

    const music = await addMusic({
      variables: {
        playlistId: +playlistId,
        url: musicUrl,
      },
    }).catch((err) => {
      setError((err as ApolloError).message);
    });

    music && setError("");

    await refetchMusics();
  }

  return (
    <main className="py-12 px-6">
      <div className="flex flex-row items-center gap-2 px-2">
        <Link href="/playlist">{"< Back"}</Link>
        <h1 className="text-3xl font-bold">
          Playlist: {playlist?.name} (ID: {playlist?.id})
        </h1>
      </div>
      <p className="mt-2 px-2 text-lg text-gray-700">{playlist?.description}</p>

      <hr className="my-4" />

      <div
        className={clsx(
          "my-4 flex flex-row justify-center gap-4",
          styles.waifuForm
        )}
      >
        <input
          className="min-w-[32rem]"
          placeholder="YouTube URL"
          type="text"
          value={musicUrl}
          onChange={(e) => setMusicUrl(e.currentTarget.value)}
        />
        <button
          className="rounded-lg border border-green-500 bg-green-400 py-2 px-4 text-lg font-bold transition-colors hover:bg-green-300 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-800"
          disabled={!validateURL(musicUrl)}
          onClick={handleAddMusic}
        >
          Add Music
        </button>
      </div>

      {error && (
        <p className="mb-2 text-center text-lg font-bold text-red-500">
          Has Error: {error}
        </p>
      )}

      <table className={styles.waifuTable}>
        <thead>
          <th>Thumbnail</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Author</th>
          <th>Views</th>
          <th>いいね!</th>
          <th>Created at</th>
          <th>Updated at</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {playlist?.music?.map((music) => (
            <tr key={`playlist-music-${music.videoId}`}>
              <td>
                <Image
                  alt="Video Thumbnail"
                  height="75"
                  src={music.thumbnailUrl}
                  width="120"
                />
              </td>
              <td>
                <a
                  className={styles.waifuLink}
                  href={YoutubeURLPrefix + music.videoId}
                  rel="noreferrer"
                  target="_blank"
                >
                  {music.title}
                </a>
              </td>
              <td>{formatTime(+music.lengthSeconds)}</td>
              <td>
                <a className={styles.waifuLink} href={music.authorChannelUrl}>
                  {music.authorName}
                </a>
              </td>
              <td>{music.viewCount}</td>
              <td>{music.likes}</td>
              <td>{new Date(music.createdAt).toLocaleString()}</td>
              <td>{new Date(music.updatedAt).toLocaleString()}</td>
              <td>
                <button
                  onClick={async () => {
                    await removeMusic({
                      variables: {
                        playlistId: +playlistId,
                        musicId: music.videoId,
                      },
                    });
                    await refetchMusics();
                  }}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

PlaylistEditPage.requiredAuth = true;

export default PlaylistEditPage;
