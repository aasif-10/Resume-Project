const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      message: "User not loggedIn",
      status: "failed",
    });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = userModel.findOne({ id: decode._id });
    req.user = user;
  } catch (error) {
    console.log(error);
  }
};
