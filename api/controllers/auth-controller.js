const { createTx } = require("../constants/helpers");
const db = require("../db");
const { hashSync } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");
const { compareSync } = require("bcryptjs");

module.exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "Please do not leave any blank spaces!",
    });
  }
  createTx(async () => {
    const hashedPassword = hashSync(password, 12);
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
      },
      select: {
        uuid: true,
        username: true,
        photoUrl: true,
      },
    });

    const token = sign({ user }, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      user,
      token,
    });
  }, res);
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
      },
      select: {
        username: true,
        uuid: true,
        photoUrl: true,
      },
    });
    if (!isFindedUserFromUsername) {
      throw new Error("Username or password wrong!");
    }

    if (!compareSync(password, isFindedUserFromUsername.password)) {
      throw new Error("Username or password wrong!");
    }

    let userPayload = {
      ...user,
      password: undefined,
    };

    const token = sign({ user: userPayload }, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      user: userPayload,
      token,
    });
  }, res);
};

module.exports.onAuth = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    req.user = undefined;
    req.token = undefined;
    return res.status(401).json({
      error: "Unauthorized!",
    });
  }

  createTx(async () => {
    const decoded = verify(authorization, process.env.JWT_SECRET_KEY);
    if (decoded && decoded.user) {
      req.user = decoded.user;
      req.token = authorization;
      return res.status(200).json({
        token: authorization,
        user: decoded.user,
      });
    } else {
      req.user = undefined;
      req.token = undefined;
      throw new Error("Unauthorized!");
    }
  }, res);
};
