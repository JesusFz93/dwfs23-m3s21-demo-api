const User = require("../models/user");
const bcrypt = require("bcrypt");

const registrarUsuario = async (req, res) => {
  const { user_name, password } = req.body;

  const salt = bcrypt.genSaltSync(10);

  const usuario = {
    user_name: user_name,
    password: bcrypt.hashSync(password, salt),
  };

  const usuario_registrado = await User(usuario).save();

  return res.json({
    ok: true,
    msg: "Usuario registrado",
    data: usuario_registrado,
  });
};

module.exports = {
  registrarUsuario,
};
