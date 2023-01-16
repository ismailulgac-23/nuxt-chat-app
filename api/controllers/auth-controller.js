const { createTx, createToken } = require("../constants/helpers");
const db = require("../db");
const { sign, verify } = require("jsonwebtoken");
const { compareSync, hashSync } = require("bcryptjs");

module.exports.logout = async (req, res) => {
  return res.status(200).json({
    logout: true
  });
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "Please do not leave any blank spaces!",
    });
  }
  createTx(async () => {
    const isFindedUserFromUsername = await db.user.findFirst({
      where: {
        username,
      }
    });
    if (!isFindedUserFromUsername) {

      const hashedPassword = hashSync(password, 12);

      const registeredUser = await db.user.create({
        data: {
          username: username,
          password: hashedPassword
        },
        select: {
          uuid: true,
          photoUrl: true,
          username: true
        }
      });

      const token = createToken(registeredUser);

      return res.status(200).json({
        user: registeredUser,
        token
      });

    } else {

      if (!compareSync(password, isFindedUserFromUsername.password)) {
        throw new Error("Username or password wrong!");
      }

      let userPayload = {
        ...isFindedUserFromUsername,
        password: undefined,
      };

      const token = createToken(userPayload);

      return res.status(200).json({
        user: userPayload,
        token,
      });
    }
  }, res);
};

module.exports.onAuth = async (req, res, next, routing = true) => {
  const { authorization } = req.headers;

  if (!authorization) {
    req.user = undefined;
    req.token = undefined;
    return res.status(401).json({
      error: "Unauthorized!",
    });
  }

  createTx(async () => {
    const accessToken = authorization.split(" ")[1];
    const decoded = verify(accessToken, process.env.JWT_SECRET_KEY);
    if (decoded && decoded.user) {
      req.user = decoded.user;
      req.token = accessToken;
      if (routing == true) {
        return res.status(200).json({
          token: accessToken,
          user: decoded.user,
        });
      } else {
        next();
      }
    } else {
      req.user = undefined;
      req.token = undefined;
      throw new Error("Unauthorized!");
    }
  }, res);
};
