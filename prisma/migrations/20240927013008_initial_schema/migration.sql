/*
  Warnings:

  - You are about to alter the column `name` on the `department` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `name` on the `level` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `department` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `level` MODIFY `name` VARCHAR(191) NOT NULL;
