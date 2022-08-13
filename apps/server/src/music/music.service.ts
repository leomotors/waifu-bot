import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";

import { CreateOneMusicArgs } from "@generated/music/create-one-music.args";
import { FindManyMusicArgs } from "@generated/music/find-many-music.args";
import { FindUniqueMusicArgs } from "@generated/music/find-unique-music.args";
import { Music } from "@generated/music/music.model";
import { User } from "@generated/user/user.model";

import * as ytdl from "ytdl-core";

import { PrismaService } from "../prisma.service";
import { AdminUser, isAdminUser } from "../user/user.decorator";

import {
    AddMusicFromUrlArgs,
    removeMusicFromPlaylistArgs,
} from "./dto/music.dto";

@Injectable()
export class MusicService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyMusicArgs) {
        return this.prisma.music.findMany(input);
    }

    findUnique(input: FindUniqueMusicArgs) {
        return this.prisma.music.findUnique(input);
    }

    playlistOfMusic(music: Music) {
        return this.prisma.music
            .findUniqueOrThrow({
                where: {
                    videoId: music.videoId,
                },
            })
            .playlist();
    }

    countPlaylists(music: Music) {
        return this.prisma.playlist.count({
            where: { music: { some: { videoId: music.videoId } } },
        });
    }

    create(input: CreateOneMusicArgs) {
        return this.prisma.music.create(input);
    }

    async assertCanAddToPlaylist(playlistId: number, user: User | AdminUser) {
        const playlist = await this.prisma.playlist.findUnique({
            where: { id: playlistId },
        });

        if (!playlist)
            throw new NotFoundException(
                `Playlist with ID ${playlistId} not found`
            );

        if (!isAdminUser(user) && playlist.ownerId != user.id) {
            throw new ForbiddenException(
                `You do not have access to playlist #${playlist.id}`
            );
        }
    }

    async addMusicToPlaylist(input: AddMusicFromUrlArgs): Promise<Music> {
        const musicIfExist = await this.prisma.music.findUnique({
            where: { videoId: ytdl.getVideoID(input.url) },
        });

        if (musicIfExist) {
            return this.prisma.music.update({
                where: {
                    videoId: musicIfExist.videoId,
                },
                data: {
                    playlist: {
                        connect: {
                            id: input.playlistId,
                        },
                    },
                },
            });
        }

        const info = await ytdl.getInfo(input.url);

        const short = info.player_response.videoDetails;
        const details = info.videoDetails;

        const thumbnails = short.thumbnail.thumbnails;
        const thumbnail = thumbnails[thumbnails.length - 1]!;

        return this.prisma.music.create({
            data: {
                playlist: {
                    connect: {
                        id: input.playlistId,
                    },
                },
                videoId: details.videoId,
                title: details.title,
                shortDescription: short.shortDescription,
                lengthSeconds: details.lengthSeconds,
                viewCount: details.viewCount,
                authorName: details.author.name,
                authorChannelUrl: details.author.channel_url,
                thumbnailUrl: thumbnail.url,
                likes: details.likes ?? 0,
            },
        });
    }

    async attemptRemoveFromPlaylist(
        input: removeMusicFromPlaylistArgs,
        user: User
    ) {
        const playlist = await this.prisma.playlist.findUnique({
            where: { id: input.playlistId },
            select: {
                owner: { select: { id: true } },
                music: { where: { videoId: input.musicId } },
            },
        });

        if (!playlist) {
            throw new NotFoundException(
                `Playlist #${input.playlistId} not found`
            );
        }

        if (user.id != playlist.owner.id) {
            throw new ForbiddenException(
                `You do not have access to playlist #${input.playlistId}`
            );
        }

        if (!playlist.music.length) {
            throw new NotFoundException(
                `Music #${input.musicId} not found in this playlist #${input.playlistId}`
            );
        }

        return this.prisma.music.update({
            where: {
                videoId: input.musicId,
            },
            data: {
                playlist: {
                    disconnect: {
                        id: input.playlistId,
                    },
                },
            },
        });
    }
}
