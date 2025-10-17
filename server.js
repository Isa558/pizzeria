
const express = require('express');
const app = express();


require('./js/conexionbd');


app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
