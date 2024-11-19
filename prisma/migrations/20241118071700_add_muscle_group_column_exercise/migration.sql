/*
  Warnings:

  - Added the required column `muscle_group` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "muscle_group" TEXT NOT NULL;
