const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.registers = async (req, res) => {
  try {
    const body = req.body;
    const userExists = await UserModel.exists({ username: body.username });
    if (userExists) {
      res
        .send({
          statusCode: 400,
          message: 'Username already exists',
        })
        .end();
      return;
    }

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
      message: 'register Success',
      data: null,
    });
  } catch (error) {
    console.log('register error: ', error.message);
    res.send({ statusCode: 500, message: 'server error' });
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.login = async (req, res) => {
  try {
    const body = req.body;

    // if(yup.validate())
    const user = await UserModel.findOne({ username: body.username });
    if (!user) {
      res
        .send({
          statusCode: 404,
          message: 'Username or Password invalid',
          data: null,
        })
        .end();
      return;
    }

    const match = await bcrypt.compare(body.password, user.password);
    if (!match) {
      res
        .send({
          statusCode: 404,
          message: 'Username or Password invalid',
          data: null,
        })
        .end();
      return;
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        avatar_url: user.avatar_url,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '3d',
      }
    );

    res.send({
      statusCode: 200,
      message: 'Login success',
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.log('login error: ', error.message);
    res.send({ statusCode: 500, message: 'server error' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const username = req.user.username;
    const profile = await UserModel.findOne({ username }, { password: false });
    // const clean = { ...profile.toObject(), password: null };
    res.send({ statusCode: 200, message: 'success', data: profile });
  } catch (error) {
    res.send({ statusCode: 500, message: 'server error' });
  }
};
