const express = require("express");

const router = express.Router();

const users = [];
// add-produt path => GET
router.get("/add", (req, res, next) => {
  res.render("add-user", {
    pageTitle: "Add User",
    path: 'user/add',
    productCss: true,
    formCss: true
  });
});

// add-produt path => POST
router.post("/add", (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.users = users;
