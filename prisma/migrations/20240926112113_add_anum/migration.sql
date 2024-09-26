/*
  Warnings:

  - You are about to alter the column `name` on the `department` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `name` on the `level` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `department` MODIFY `name` ENUM('HR', 'IT', 'MARKETING') NOT NULL;

-- AlterTable
ALTER TABLE `level` MODIFY `name` ENUM('JUNIOR', 'MID', 'SENIOR') NOT NULL;
