exports.obtenerProductos = (req, res) => {
  res.json([{ id: 1, nombre: 'Pizza Margarita', precio: 25000 }]);
};

exports.agregarProducto = (req, res) => {
  const nuevo = req.body;
  console.log('Nuevo producto:', nuevo);
  res.status(201).json({ mensaje: 'Producto agregado', producto: nuevo });
};

exports.eliminarProducto = (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Producto con ID ${id} eliminado` });
};
