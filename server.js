const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "Da" });
});

const userRouter = require("./routers/user");

app.use("/users", userRouter);

app.listen(3000);
