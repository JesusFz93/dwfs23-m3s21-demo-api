const { Router } = require("express");
const {
  registrarUsuario,
  iniciarSesion,
} = require("../controllers/auth.controllers");

const router = Router();

router.post("/registrar_usuario", registrarUsuario);
router.post("/iniciar_sesion", iniciarSesion);

module.exports = router;
