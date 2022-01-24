const UserModel = require("../models/user.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.register = async (req, res) => {
  const body = req.body;
  const checkUsername = await UserModel.exists({ username: body.username });
  if (!checkUsername) {
    const hashPassword = await bcrypt.hash(body.password, saltRounds);
    const registerPayload = {
      username: body.username,
      password: hashPassword,
      avatar_url: body.avatar_url,
    };
    const register = new UserModel(registerPayload);
    await register.save();
    res.send({
      statusCode: 200,
      message: "register Success",
      data: null,
    });
  } else {
    res.send({
      statusCode: 400,
      message: "Username already exists",
    });
  }
};

exports.login = async (req, res) => {
  const body = req.body;
  const user = await UserModel.findOne({ username: body.username });
  if (user == null) {
    res.send({ statusCode: 404, message: "Username or Password invalid" });
  } else {
    const match = await bcrypt.compare(body.password, user.password);
    if (!match) {
      res.send({ statusCode: 404, message: "Username or Password invalid" });
    } else {
      res.send({ statusCode: 200, message: "Login success" });
    }
  }
  // const match = await bcrypt.compare(password, body.password);

  // if(match) {
  //login
  // }
  // รับ username password จากหน้าบ้าน
  // เอา username password ที่รับมาไปเช็คกับ username password ใน database
  // ถ้าเช็คแล้วเจอให้ส่งค่าไปหน้าบ้าน
  // ถ้าเช็คแล้วไม่เจอให้ message ไปหน้าบ้านว่าไม่เจอ
};
