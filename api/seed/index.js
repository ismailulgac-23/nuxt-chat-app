const { userSeed } = require("./user");
const { chatSeed } = require("./chat");
const { chatMemberSeed } = require("./chat-member");
async function bootstrap() {
 await userSeed();
 await chatSeed();
 await chatMemberSeed();

 console.log('Seed successfuly!')
}
bootstrap();