const express = require("express");
const path = require("path");
const mongooseConnection = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

/* database models */
const userModel = require("./models/user-model");
const tokenBlacklistModel = require("./models/token-blacklist-model");
const resumeModel = require("./models/resume-model");

/* Routes */
const authRoutes = require("../src/routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
/* Use routes */
app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);

module.exports = app;
