// server.js
const express = require('express');
const app = express();

// ✅ Importa la conexión para que se ejecute al iniciar
require('./js/conexionbd');


app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
