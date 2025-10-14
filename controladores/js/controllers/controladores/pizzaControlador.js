let pizzas = [
  { id: 1, nombre: 'Hawaiana', precio: 25000 },
  { id: 2, nombre: 'Mexicana', precio: 28000 }
];

// Obtener todas las pizzas
exports.obtenerPizzas = (req, res) => {
  res.json(pizzas);
};

// Crear nueva pizza
exports.crearPizza = (req, res) => {
  const nueva = req.body;
  nueva.id = pizzas.length + 1;
  pizzas.push(nueva);
  res.json({ mensaje: 'Pizza agregada', pizza: nueva });
};

// Actualizar pizza existente
exports.actualizarPizza = (req, res) => {
  const id = parseInt(req.params.id);
  const pizza = pizzas.find(p => p.id === id);
  if (!pizza) return res.status(404).json({ error: 'Pizza no encontrada' });

  Object.assign(pizza, req.body);
  res.json({ mensaje: 'Pizza actualizada', pizza });
};

// Eliminar pizza
exports.eliminarPizza = (req, res) => {
  const id = parseInt(req.params.id);
  pizzas = pizzas.filter(p => p.id !== id);
  res.json({ mensaje: 'Pizza eliminada' });
};
