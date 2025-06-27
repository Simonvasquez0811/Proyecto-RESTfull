/*
  Warnings:

  - You are about to drop the column `author_id` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `book` table. All the data in the column will be lost.
  - You are about to drop the `author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `isbn` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `due_date` on table `loan` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_category_id_fkey`;

-- DropIndex
DROP INDEX `Book_author_id_fkey` ON `book`;

-- DropIndex
DROP INDEX `Book_category_id_fkey` ON `book`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `author_id`,
    DROP COLUMN `category_id`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    MODIFY `isbn` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `loan` MODIFY `due_date` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `author`;

-- DropTable
DROP TABLE `category`;
