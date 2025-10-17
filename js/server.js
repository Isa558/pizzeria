
const express = require('express');
const conexion = require('./conexionbd'); 
const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Servidor de Pizzería funcionando correctamente con conexión a MySQL!');
});


app.get('/productos', (req, res) => {
  res.send('Aquí irá la lista de productos de la pizzería 🍕');
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
