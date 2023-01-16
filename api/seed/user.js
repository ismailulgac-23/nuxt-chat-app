const { hashSync } = require("bcryptjs");
const { createUUID } = require("../constants/helpers");
const db = require("../db");
const usersData = [
 {
  uuid: createUUID(),
  username: "ismail.ulgac",
  password: hashSync("123456", 12)
 },
 {
  uuid: createUUID(),
  username: "mehmet6543",
  password: hashSync("123456", 12)
 },
 {
  uuid: createUUID(),
  username: "izmirli22",
  password: hashSync("123456", 12)
 },
];

const bootstrap = async () => {
 try {
  await db.user.createMany({
   data: usersData
  });
 } catch (error) {
  console.log('error', error);
  throw new Error("seed error");
 }
};

module.exports = {
 userSeed: bootstrap, usersData
}