const express = require("express");
const path = require("path");
const mongooseConnection = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

/* database models */
const userModel = require("./models/user-model");
const tokenBlacklistModel = require("./models/token-blacklist-model");

/* Routes */
const authRoutes = require("../src/routes/authRoutes");

/* Use routes */
app.use("/auth", authRoutes);

module.exports = app;
