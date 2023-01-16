import { onAuth } from "../controllers/auth-controller";

module.exports = async (req, res, next) => {
 await onAuth(req, res, next, false);
};