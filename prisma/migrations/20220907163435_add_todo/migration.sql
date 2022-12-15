-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('Todo', 'InProgress', 'Review', 'Done');

-- CreateTable
CREATE TABLE "todo_item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "todo_list_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_collaborators" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_collaborators_AB_unique" ON "_collaborators"("A", "B");

-- CreateIndex
CREATE INDEX "_collaborators_B_index" ON "_collaborators"("B");

-- AddForeignKey
ALTER TABLE "todo_item" ADD CONSTRAINT "todo_item_todo_list_id_fkey" FOREIGN KEY ("todo_list_id") REFERENCES "todo_list"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_list" ADD CONSTRAINT "todo_list_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collaborators" ADD CONSTRAINT "_collaborators_A_fkey" FOREIGN KEY ("A") REFERENCES "todo_list"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collaborators" ADD CONSTRAINT "_collaborators_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
