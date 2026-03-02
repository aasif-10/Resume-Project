const mongoose = require("mongoose");

const tokenBlacklistSchema = mongoose.Schema({
  token: {
    type: String,
    required: [true, "token is required"],
  },
  expiresAt: {
    type: Date,
    default: Date.now,
  },
});

// Create TTL index on expiresAt field - documents expire after 3 days (259200 seconds)
tokenBlacklistSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 259200 });

module.exports = mongoose.model("tokenBlacklist", tokenBlacklistSchema);
