const express = require("express");
const services = require("../controllers/product.controller");
const app = express();

app.post("/", services.addProduct);

app.get("/", services.getProducts);

app.get("/:_id", services.getProductBy_id);

app.put("/:_id", services.editProductBy_id);

app.delete("/:_id", services.delProductBy_id);
module.exports = app;
