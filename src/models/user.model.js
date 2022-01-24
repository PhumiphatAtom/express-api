const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar_url: { type: String },
});

const UserModel = mongoose.model("user", userSchema, "user");

module.exports = UserModel;
