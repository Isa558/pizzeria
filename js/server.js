// Importar dependencias
const express = require('express');
const conexion = require('./js/conexionbd'); // archivo con tu conexión a MySQL
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Ruta raíz (para probar que el servidor responde)
app.get('/', (req, res) => {
  res.send('🍕 Servidor de Pizzería funcionando correctamente con conexión a MySQL!');
});

// Ejemplo de ruta adicional (para comprobar rutas)
app.get('/productos', (req, res) => {
  res.send('Aquí irá la lista de productos de la pizzería 🍕');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
