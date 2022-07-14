/*
  Warnings:

  - Made the column `name` on table `playlist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "playlist" ALTER COLUMN "name" SET NOT NULL;
