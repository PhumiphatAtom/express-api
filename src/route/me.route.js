const express = require("express");
const { getMe, PostMe, PostProfile } = require("../controllers/me.controller");
const app = express();

app.get("/", getMe);

app.post("/", PostMe);

app.post("/profile", PostProfile);

module.exports = app;
