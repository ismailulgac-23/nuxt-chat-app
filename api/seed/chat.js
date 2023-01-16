const { createUUID } = require("../constants/helpers");
const db = require("../db");
const { usersData } = require("./user");

const chatsData = [
 {
  uuid: createUUID(),
  creatorUuid: usersData[0].uuid,
  name: "Example group"
 },
 {
  uuid: createUUID(),
  creatorUuid: usersData[1].uuid,
  name: "Example group 2"
 }
];

const bootstrap = async () => {
 try {
  await db.chat.createMany({
   data: chatsData
  });
 } catch (error) {
  console.log('error', error);
  throw new Error("seed error");
 }
};

module.exports = {
 chatSeed: bootstrap,
 chatsData
}