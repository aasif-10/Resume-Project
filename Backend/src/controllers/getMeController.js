const userModel = require("../models/user-model");

/**
 * @route GET /auth/me
 * @description Get user details
 * @access Private
 */

module.exports.getMeController = async (req, res) => {
  const user = await userModel.findById({ _id: req.user._id });

  res.status(200).json({
    message: "User details fetched",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
