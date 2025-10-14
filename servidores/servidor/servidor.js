// Importar dependencias
const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

// Middleware para leer JSON
app.use(express.json());

// Servir archivos estáticos (como index.html y CSS)
app.use(express.static(path.join(__dirname, '..')));

// Importar rutas
const pizzaRutas = require('../rutas/pizzaRutas');
app.use('/api/pizzas', pizzaRutas);

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});
