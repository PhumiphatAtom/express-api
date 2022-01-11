const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("user", userSchema, "user");

module.exports = UserModel;
