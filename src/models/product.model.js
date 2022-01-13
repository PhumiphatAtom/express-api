const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  img_url: String,
});

const ProductModel = mongoose.model("product", productSchema, "product");

module.exports = ProductModel;
