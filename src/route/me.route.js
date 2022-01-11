const express = require("express");
const { getMe, postMe, postProfile } = require("../controllers/me.controller");
const app = express();

app.get("/", getMe);

app.post("/", postMe);

app.post("/profile", postProfile);

module.exports = app;
