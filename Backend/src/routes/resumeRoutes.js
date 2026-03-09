const express = require("express");
const router = express.Router();

const upload = require("../config/multer-config");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const {
  resumeReportController,
} = require("../controllers/resumeReportController");

/**
 * @route POST /upload
 * @description Upload a new resume, job description, self description
 * @access Private
 */

router.post(
  "/upload",
  isLoggedIn,
  upload.single("resume"),
  resumeReportController,
);

module.exports = router;
