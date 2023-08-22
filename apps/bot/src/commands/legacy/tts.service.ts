import { Context } from "cocoa-discord-utils";
import { Awaitable } from "cocoa-discord-utils/internal/base";

import { GuildMember, VoiceChannel } from "discord.js";

import {
  AudioPlayer,
  AudioPlayerStatus,
  DiscordGatewayAdapterCreator,
  VoiceConnection,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  entersState,
  getVoiceConnection,
  joinVoiceChannel as libJoinVoiceChannel,
} from "@discordjs/voice";

import { getAllAudioUrls } from "google-tts-api";
import { IncomingMessage } from "node:http";
import https from "node:https";

export namespace Voice {
  export const audio_player: { [guildId: string]: AudioPlayer } = {};

  export function destroyConnection(conn: VoiceConnection | undefined) {
    try {
      conn?.destroy();
    } catch (e) {
      // pass
    }
  }

  // eslint-disable-next-line prefer-const
  export let loop = false;

  export function isPaused(guildId: string) {
    return audio_player[guildId]?.state?.status === AudioPlayerStatus.Paused;
  }

  /**
   * Joins to the channel if not already in one.
   * @returns `false` if no changes, `true` if new channel is joined
   */
  export async function joinFromContext(ctx: Context) {
    const connection = getVoiceConnection(ctx.guildId!);

    const voiceChannel = (ctx.member as GuildMember | undefined)?.voice
      .channel as VoiceChannel | undefined;

    if (!voiceChannel) return false;

    const guild = ctx.client.guilds.cache.get(ctx.guildId!);

    if (!guild?.available) return false;

    if (connection?.state.status === VoiceConnectionStatus.Ready) {
      return false;
    }

    await Voice.joinVoiceChannel(voiceChannel);

    return true;
  }

  export async function joinVoiceChannel(
    channel: VoiceChannel,
    onDisconnect?: () => Awaitable<void>
  ) {
    const connection = libJoinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild
        .voiceAdapterCreator as DiscordGatewayAdapterCreator,
      selfMute: false,
    });

    connection.on(VoiceConnectionStatus.Disconnected, async (_, __) => {
      try {
        await Promise.race([
          entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
          entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
        ]);
        // Seems to be reconnecting to a new channel - ignore disconnect
      } catch (error) {
        // Seems to be a real disconnect which SHOULDN'T be recovered from
        destroyConnection(connection);
        await onDisconnect?.();
      }
    });

    try {
      await entersState(connection, VoiceConnectionStatus.Ready, 5_000);
      return connection;
    } catch (err) {
      return undefined;
    }
  }

  /**
   * Speak to current voice channel
   * @returns true if success,
   * false early if no connection, later if error occured
   */
  export async function speak(
    guildId: string,
    text: string,
    lang?: string | null
  ) {
    const connection = getVoiceConnection(guildId);
    if (!connection) return false;

    const urls = getAllAudioUrls(text, { lang: lang ?? "th", slow: false });

    const streams = await Promise.all(
      urls.map(async (url) =>
        createAudioResource(
          await new Promise<IncomingMessage>((res, _) => {
            https.get(url.url, (stream) => {
              res(stream);
            });
          })
        )
      )
    );

    if (audio_player[guildId]) {
      audio_player[guildId]!.stop();
    }

    const audioPlayer = createAudioPlayer();
    audio_player[guildId] = audioPlayer;

    connection.subscribe(audioPlayer);

    audioPlayer.play(streams[0]!);
    let next = 1;

    return new Promise<boolean>((resolve, reject) => {
      audioPlayer.on(AudioPlayerStatus.Idle, () => {
        if (next < streams.length) {
          audioPlayer.play(streams[next]!);
          next++;
        } else {
          audioPlayer.stop();
          getVoiceConnection(guildId)?.disconnect();
          resolve(true);
        }
      });
      audioPlayer.on("error", (err) => {
        audioPlayer.stop();
        getVoiceConnection(guildId)?.disconnect();
        reject(err);
      });
    });
  }
}
