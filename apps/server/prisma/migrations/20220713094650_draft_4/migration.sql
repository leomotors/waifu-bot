-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "last_interact_guild_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "access_token" (
    "token" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" SERIAL NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "music" (
    "video_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "length_seconds" TEXT NOT NULL,
    "view_count" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "author_channel_url" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("video_id")
);

-- CreateTable
CREATE TABLE "_MusicToPlaylist" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "access_token_token_key" ON "access_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "access_token_user_id_key" ON "access_token"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_MusicToPlaylist_AB_unique" ON "_MusicToPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_MusicToPlaylist_B_index" ON "_MusicToPlaylist"("B");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access_token" ADD CONSTRAINT "access_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlist" ADD CONSTRAINT "playlist_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MusicToPlaylist" ADD CONSTRAINT "_MusicToPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "music"("video_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MusicToPlaylist" ADD CONSTRAINT "_MusicToPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
