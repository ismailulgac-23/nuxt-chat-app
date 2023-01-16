const { authMiddleware } = require("../middlewares/index");
const router = require("express").Router();
const { getChats, getChatMessages, sendMessage } = require("../controllers/chat-controller");
router.get("/", authMiddleware, getChats);
router.get("/:uuid/messages", authMiddleware, getChatMessages);
router.post("/messages", authMiddleware, sendMessage);
module.exports = router;