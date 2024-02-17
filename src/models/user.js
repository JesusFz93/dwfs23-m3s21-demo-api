const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  user_name: {
    type: String,
    required: [true, "El user_name es obligatorio"],
    unique: true,
  },

  password: {
    type: String,
  },

  email: {
    type: String,
  },

  age: {
    type: String,
  },

  active: {
    type: Boolean,
    default: true,
  },

  image: {
    type: String,
    default:
      "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  },

  correo: String,
  telefono: String,
});

module.exports = model("user", UserSchema, "users");
