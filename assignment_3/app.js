const path = require("path");
const express = require("express");

const app = express();

const userRoutes = require("./routes/user");

// const path = require("../util/path");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  console.log(__dirname);
});

app.listen(3000);
