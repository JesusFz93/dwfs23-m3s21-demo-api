const User = require("../models/user");
const bcrypt = require("bcrypt");

const { generarJWT } = require("../helpers/jwt.helper");

const registrarUsuario = async (req, res) => {
  const { user_name, password } = req.body;

  const salt = bcrypt.genSaltSync(10);

  const usuario = {
    user_name: user_name,
    password: bcrypt.hashSync(password, salt),
  };

  const usuario_registrado = await User(usuario).save();

  const token = await generarJWT(usuario_registrado.id);

  return res.json({
    ok: true,
    msg: "Usuario registrado",
    data: usuario_registrado,
    token: token,
  });
};

const iniciarSesion = async (req, res) => {
  const { user_name, password } = req.body;

  const user = await User.findOne({ user_name: user_name });

  if (!user) {
    return res.status(400).json({
      ok: false,
      msg: "Usuario o contraseña incorrectos",
      data: {},
    });
  }

  const validPassord = bcrypt.compareSync(password, user.password);

  if (!validPassord) {
    return res.status(400).json({
      ok: false,
      msg: "Usuario o contraseña incorrectos",
      data: {},
    });
  }

  const token = await generarJWT(user.id);

  return res.json({
    ok: true,
    msg: "Acceso correcto",
    data: user,
    token: token,
  });
};

module.exports = {
  registrarUsuario,
  iniciarSesion,
};
