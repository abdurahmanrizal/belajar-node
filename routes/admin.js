const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

const products = [];
// add-produt path => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    formCss: true,
    productCss: true,
    activeAddProduct: true,
    activeShop: false,
  });
});

// add-produt path => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
