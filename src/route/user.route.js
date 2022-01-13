const express = require("express");
const services = require("../controllers/user.controller");
const app = express();

app.post("/", services.addUser);

app.get("/", services.getUsers);

app.get("/:username", services.getUserByUsername);

app.put("/:username", services.editUserByUsername);

app.delete("/:username", services.delUserByUsername);
module.exports = app;
