const express = require("express");
const router = express.Router();

const { registerController } = require("../controllers/registerController");
const { loginController } = require("../controllers/loginController");
const { logoutController } = require("../controllers/logoutController");

/**
 * @route POST /auth/register
 * @description Register an user
 * @access Public
 */

router.post("/register", registerController);

/**
 * @route POST /auth/login
 * @description Login an user
 * @access Public
 */

router.post("/login", loginController);

/**
 * @route POST /auth/logout
 * @description Logout an user
 * @access Public
 */

router.get("/logout", logoutController);

module.exports = router;
