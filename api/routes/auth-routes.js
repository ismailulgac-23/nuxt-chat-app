const { register, onAuth, login } = require("../controllers/auth-controller");
const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.get("/on-auth", onAuth);
module.exports = router;
