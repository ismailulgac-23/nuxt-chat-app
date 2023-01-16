const { sign } = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');


module.exports.createUUID = () => uuidv4();

module.exports.createTx = async (callback, res) => {
  try {
    await callback();
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({
      error: error.message ?? "Something went wrong!",
    });
  }
};

module.exports.createToken = (user) => sign({ user }, process.env.JWT_SECRET_KEY);