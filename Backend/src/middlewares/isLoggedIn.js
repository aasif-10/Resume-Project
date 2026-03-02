const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const tokenBlacklistModel = require("../models/token-blacklist-model");

module.exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      message: "User not loggedIn",
      status: "failed",
    });

  try {
    /* Check if token is blacklisted */
    const blacklistedToken = await tokenBlacklistModel.findOne({ token });
    if (blacklistedToken) {
      return res.status(401).json({
        message: "Token is invalid or expired",
        status: "failed",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ _id: decode.id });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
        status: "failed",
      });
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
      status: "failed",
    });
  }
};
