const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    pageTitle: "Shop",
    prods: products,
    path: "/",
    activeShop: true,
    activeAddProduct: false,
    productCss: true,
    formCss:false,
    hasProduct: products.length > 0,
  });
});

module.exports = router;
