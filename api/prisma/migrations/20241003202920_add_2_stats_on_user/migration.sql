/*
  Warnings:

  - Added the required column `heigth` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weigth` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "heigth" TEXT NOT NULL,
ADD COLUMN     "weigth" TEXT NOT NULL;
