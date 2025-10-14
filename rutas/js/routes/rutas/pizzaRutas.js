const express = require('express');
const router = express.Router();
const pizzaControlador = require('../controladores/pizzaControlador');

// Rutas CRUD básicas
router.get('/', pizzaControlador.obtenerPizzas);
router.post('/', pizzaControlador.crearPizza);
router.put('/:id', pizzaControlador.actualizarPizza);
router.delete('/:id', pizzaControlador.eliminarPizza);

module.exports = router;
