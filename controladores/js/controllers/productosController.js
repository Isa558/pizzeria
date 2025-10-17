// controladores/productosController.js
const db = require('../config/db');

// Obtener todos los productos
exports.obtenerProductos = (req, res) => {
  db.query('SELECT * FROM productos', (error, resultados) => {
    if (error) return res.status(500).json({ mensaje: 'Error en la base de datos' });
    res.json(resultados);
  });
};

// Obtener un producto por ID
exports.obtenerProductoPorId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (error, resultados) => {
    if (error) return res.status(500).json({ mensaje: 'Error en la base de datos' });
    if (resultados.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(resultados[0]);
  });
};

// Agregar nuevo producto
exports.agregarProducto = (req, res) => {
  const { nombre, precio } = req.body;
  db.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio], (error, resultado) => {
    if (error) return res.status(500).json({ mensaje: 'Error al agregar producto' });
    res.status(201).json({ id: resultado.insertId, nombre, precio });
  });
};

// Actualizar producto
exports.actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id], (error) => {
    if (error) return res.status(500).json({ mensaje: 'Error al actualizar producto' });
    res.json({ mensaje: 'Producto actualizado correctamente' });
  });
};

// Eliminar producto
exports.eliminarProducto = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM productos WHERE id = ?', [id], (error) => {
    if (error) return res.status(500).json({ mensaje: 'Error al eliminar producto' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  });
};
