require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); // แปลง json body
const mongoose = require("mongoose");
const cors = require("cors");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL, () => {
  console.log("mongoDB conected!!");
});

const app = express();
const port = 4321;

app.use(cors());

app.use(bodyParser.json()); // เรียกใช้

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// route
const meRoute = require("./route/me.route");
// end route
app.use("/me", meRoute);

const userRoute = require("./route/user.route");
app.use("/user", userRoute);

const productRoute = require("./route/product.route");
app.use("/product", productRoute);

const { register } = require("./controllers/user.controller");
app.post("/register", register);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
