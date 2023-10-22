-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('Playing', 'Streaming', 'Listening', 'Watching', 'Competing');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "ticket_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateTable
CREATE TABLE "waifu" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL DEFAULT '',
    "name_en" TEXT NOT NULL,
    "name_ja" TEXT NOT NULL,
    "short_name_en" TEXT NOT NULL,
    "short_name_ja" TEXT NOT NULL,
    "footer_text" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "source_en" TEXT NOT NULL,
    "source_ja" TEXT NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waifu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "simp_interval" (
    "id" SERIAL NOT NULL,
    "waifu_id" TEXT NOT NULL,
    "begin" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "days" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "type" "ActivityType" NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "configuration" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "current_waifu_id" TEXT NOT NULL,
    "simping_since" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "simp_interval_id_key" ON "simp_interval"("id");

-- CreateIndex
CREATE UNIQUE INDEX "activity_id_key" ON "activity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "configuration_id_key" ON "configuration"("id");

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waifu" ADD CONSTRAINT "waifu_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simp_interval" ADD CONSTRAINT "simp_interval_waifu_id_fkey" FOREIGN KEY ("waifu_id") REFERENCES "waifu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuration" ADD CONSTRAINT "configuration_current_waifu_id_fkey" FOREIGN KEY ("current_waifu_id") REFERENCES "waifu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
