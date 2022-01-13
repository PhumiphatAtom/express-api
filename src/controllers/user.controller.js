const UserModel = require("../models/user.model");
const { param } = require("../route/user.route");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.addUser = async (req, res) => {
  const body = req.body;
  const userPayload = {
    first_name: body.first_name,
    last_name: body.last_name,
    username: body.username,
    password: body.password,
  };
  const user = new UserModel(userPayload);
  await user.save();
  res.send({ statusCode: 200, message: "addUser success", data: user });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

exports.getUsers = async (req, res) => {
  const users = await UserModel.find({});
  res.send({ statusCode: 200, message: "getUser success", data: users });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

exports.getUserByUsername = async (req, res) => {
  const params = req.params;
  const user = await UserModel.findOne({ username: params.username });

  res.send({
    statusCode: 200,
    message: "getUserByUsername success",
    data: user,
  });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

exports.editUserByUsername = async (req, res) => {
  const body = req.body;
  const params = req.params;

  const checkUser = await UserModel.findOne({ username: params.username });
  if (!checkUser) {
    res.send({
      statusCode: 400,
      message: "Notfound user",
      data: null,
    });
    end();
  }

  const user = await UserModel.findOneAndUpdate(
    { username: params.username },
    { $set: body },
    { new: true }
  );

  res.send({
    statusCode: 200,
    message: "editUserByUsername success",
    data: user,
  });
};
