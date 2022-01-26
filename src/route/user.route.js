const express = require("express");
const services = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const app = express();

app.get("/profile", authMiddleware, services.getProfile);

module.exports = app;
