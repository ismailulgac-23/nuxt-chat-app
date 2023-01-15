-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL DEFAULT 'user-default-image.png',

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Chat" (
    "uuid" TEXT NOT NULL,
    "creatorUuid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ChatMember" (
    "uuid" TEXT NOT NULL,
    "userUuid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMember_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Message" (
    "uuid" TEXT NOT NULL,
    "chatUuid" TEXT NOT NULL,
    "senderUuid" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_creatorUuid_fkey" FOREIGN KEY ("creatorUuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMember" ADD CONSTRAINT "ChatMember_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderUuid_fkey" FOREIGN KEY ("senderUuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatUuid_fkey" FOREIGN KEY ("chatUuid") REFERENCES "Chat"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
