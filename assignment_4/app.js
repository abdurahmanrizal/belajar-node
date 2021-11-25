const express = require('express')
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", "views");

const userRoute = require('./routes/user');
const homeRoute = require('./routes/home');

const rootDir = require("./helpers/path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'public')));
console.log(path.join(rootDir, 'public'))
app.use('/user', userRoute.routes);
app.use(homeRoute)

app.use((req, res, next) => {
    res.status(404).render("404", {
         pageTitle: "Page Not Found", 
         productCss: false,
         formCss:false,
         path: 'not-found'
    });
  });
  
app.listen(4000);