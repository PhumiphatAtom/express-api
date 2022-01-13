const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  img_url: String,
  quantity: Number,
});

const ProductModel = mongoose.model("product", productSchema, "product");

module.exports = ProductModel;
