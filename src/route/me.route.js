const express = require("express");
const services = require("../controllers/me.controller");
const app = express();

app.get("/", services.getMe);

app.post("/", services.postMe);

app.post("/profile", services.postProfile);

module.exports = app;
