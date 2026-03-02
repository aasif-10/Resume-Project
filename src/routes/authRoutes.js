const express = require("express");
const router = express.Router();

const { registerController } = require("../controllers/registerController");
const { loginController } = require("../controllers/loginController");
const { logoutController } = require("../controllers/logoutController");
const { getMeController } = require("../controllers/getMeController");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

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

/**
 * @route GET /auth/me
 * @description Get user details
 * @access Private
 */

router.get("/get-me", isLoggedIn, getMeController);

module.exports = router;
