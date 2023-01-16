const { register, onAuth, logout,login } = require("../controllers/auth-controller");
const router = require("express").Router();
router.post("/login", login);
router.get("/on-auth", onAuth);
router.post("/logout", logout);
module.exports = router;
