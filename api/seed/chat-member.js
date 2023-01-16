const db = require("../db");
const { chatsData } = require("./chat");
const { usersData } = require("./user");

const chatMembersData = [
 {
  chatUuid: chatsData[0].uuid,
  userUuid: usersData[0].uuid,
 },
 {
  chatUuid: chatsData[0].uuid,
  userUuid: usersData[1].uuid,
 },
 {
  chatUuid: chatsData[0].uuid,
  userUuid: usersData[2].uuid,
 },
 {
  chatUuid: chatsData[1].uuid,
  userUuid: usersData[1].uuid,
 },
 {
  chatUuid: chatsData[1].uuid,
  userUuid: usersData[0].uuid,
 }
];

const bootstrap = async () => {
 try {
  await db.chatMember.createMany({
   data: chatMembersData
  });
 } catch (error) {
  console.log('error', error);
  throw new Error("seed error");
 }
};

module.exports = {
 chatMemberSeed: bootstrap,
 chatMembersData
}