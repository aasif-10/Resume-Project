const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already taken"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Account already exitst"],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
