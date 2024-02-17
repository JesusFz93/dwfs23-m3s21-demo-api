require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./database/config");

dbConnection();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido al API",
  });
});

app.use("/usuarios", require("./routes/users.routes"));
// app.use("/movies", require("./routes/movies.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
