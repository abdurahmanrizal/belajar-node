const path = require("path"); // use for get absolute path file system

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "user.html"));
});
router.get("/list-user", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "list-user.html"));
});

module.exports = router;
