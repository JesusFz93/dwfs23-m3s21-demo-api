require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");

dbConnection();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido al API",
  });
});

app.use("/usuarios", require("./routes/users.routes"));
app.use("/auth", require("./routes/auth.routes"));
// app.use("/movies", require("./routes/movies.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
