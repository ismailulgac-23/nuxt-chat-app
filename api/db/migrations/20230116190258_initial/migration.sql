/*
  Warnings:

  - Added the required column `chatUuid` to the `ChatMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chatmember` ADD COLUMN `chatUuid` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ChatMember` ADD CONSTRAINT `ChatMember_chatUuid_fkey` FOREIGN KEY (`chatUuid`) REFERENCES `Chat`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
