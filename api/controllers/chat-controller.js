const db = require("../db");

module.exports.getChats = async (req, res) => {
 const userUuid = req.user.uuid;
 const chats = await db.chat.findMany({
  where: {
   members: {
    some: {
     userUuid: userUuid
    }
   }
  },
  include: {
   members: {
    select: {
     user: {
      select: {
       username: true,
      }
     }
    }
   },
   messages: {
    select: {
     senderUuid: true,
     sender: {
      select: {
       username: true
      }
     },
     content: true
    },
    take: 1,
    orderBy: {
     createdAt: "desc"
    }
   },
  }
 });
 return res.status(200).json(chats);
};

module.exports.getChatMessages = async (req, res) => {
 const { uuid: chatUuid } = req.params;
 const messages = await db.message.findMany({
  where: {
   chatUuid
  },
  select: {
   createdAt: true,
   content: true,
   senderUuid: true,
   sender: {
    select: {
     username: true
    }
   }
  }
 });
 return res.status(200).json(messages);
}

module.exports.sendMessage = async (req, res) => {
 const { uuid: userUuid } = req.user;
 const { content, chatUuid } = req.body;
 const message = await db.message.create({
  data: {
   content: content,
   chatUuid: chatUuid,
   senderUuid: userUuid,
  },
  select: {
   createdAt: true,
   content: true,
   senderUuid: true,
   sender: {
    select: {
     username: true
    }
   }
  }
 });
 return res.status(200).json(message);
};