const ProductModel = require("../models/product.model");
// const { param } = require("../route/product.route");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.addProduct = async (req, res) => {
  const body = req.body;
  const productPayload = {
    name: body.name,
    description: body.description,
    price: body.price,
    img_url: body.img_url,
    quantity: body.quantity,
  };
  const product = new ProductModel(productPayload);
  await product.save();
  res.send({ statusCode: 200, message: "addProduct Success", data: product });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.send({ statusCode: 200, message: "getProduct Success", data: products });
};

exports.getProductBy_id = async (req, res) => {
  const params = req.params;
  const product = await ProductModel.findOne({ _id: params._id });
  res.send({
    statusCode: 200,
    message: "getProductBy_id Success",
    data: product,
  });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.editProductBy_id = async (req, res) => {
  const body = req.body;
  const params = req.params;

  const checkProduct = await ProductModel.findOne({ _id: params._id });
  if (!checkProduct) {
    res.send({
      statusCode: 400,
      message: "Notfound product",
      data: null,
    });
    end();
  }

  const product = await ProductModel.findOneAndUpdate(
    { _id: params._id },
    { $set: body },
    { new: true }
  );

  res.send({
    statusCode: 200,
    message: "editProductBy_id success",
    data: product,
  });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.delProductBy_id = async (req, res) => {
  const params = req.params;
  const product = await ProductModel.findByIdAndDelete({ _id: params._id });
  res.send({
    statusCode: 200,
    message: "getProductBy_id Success",
    data: product,
  });
};
