const conexion = require('../conexionbd');

exports.listar = (req, res) => {
  conexion.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.obtenerPorId = (req, res) => {
  const id = req.params.id;
  conexion.query('SELECT * FROM productos WHERE id_producto = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.crear = (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body;
  conexion.query(
    'INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)',
    [nombre, descripcion, precio, imagen],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Producto agregado correctamente', id: result.insertId });
    }
  );
};

exports.actualizar = (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, precio, imagen } = req.body;
  conexion.query(
    'UPDATE productos SET nombre=?, descripcion=?, precio=?, imagen=? WHERE id_producto=?',
    [nombre, descripcion, precio, imagen, id],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Producto actualizado correctamente' });
    }
  );
};

exports.eliminar = (req, res) => {
  const id = req.params.id;
  conexion.query('DELETE FROM productos WHERE id_producto=?', [id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto eliminado correctamente' });
  });
};
