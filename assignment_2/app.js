const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this is index");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("this is users");
  res.send(`
        <ul>
            <li>Abdurahman</li>
            <li>Node js</li>
        </ul>
    `);
});

app.use("/", (req, res, next) => {
  res.send("<p>Hello World</p>");
});

app.listen(3000);
