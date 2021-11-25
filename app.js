const path = require("path");
const express = require("express");
// const expressHbs = require("express-handlebars");
const app = express();

// app.engine(
//   "handlebars",
//   expressHbs({ layoutsDir: "views/layouts", defaultLayout: "main-layout" })
// );
// set view use template engine pug
// app.set("view engine", "pug");
// set view use template engine handlebars
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const rootDir = require("./helpers/path");

const bodyParser = require("body-parser");
// use for middleware in express with 3 arguments request, response, and next
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found", productCss: false, formCss:false, activeShop:false, activeAddProduct: false });
  // console.log(__dirname);
});

app.listen(3000);
