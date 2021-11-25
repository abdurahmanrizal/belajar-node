
const express = require("express");

const router = express.Router();

const userData = require("./user");

router.get("/", (req, res, next) => {
  const users = userData.users
  res.render("home", {
    pageTitle: "Home",
    path: '/',
    productCss: true,
    formCss: false,
    users: users
  });
});

module.exports = router;
