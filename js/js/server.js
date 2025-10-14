// js/server.js
const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const productosRoutes = require('./routes/productos');
const clientesRoutes = require('./routes/clientes');
const pedidosRoutes = require('./routes/pedidos');
const detallesRoutes = require('./routes/detalles');

// Usar rutas
app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/detalles', detallesRoutes);

// Servidor en puerto 3000
app.listen(3000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:3000');
});
