/*
  Warnings:

  - You are about to drop the column `heigth` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `weigth` on the `users` table. All the data in the column will be lost.
  - Added the required column `height` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "heigth",
DROP COLUMN "weigth",
ADD COLUMN     "height" TEXT NOT NULL,
ADD COLUMN     "weight" TEXT NOT NULL;
