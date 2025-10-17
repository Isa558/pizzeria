const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'prontopizza'
});


conexion.connect((error) => {
  if (error) {
    console.error(' Error al conectar a la base de datos:', error);
    return;
  }
  console.log(' Conexión a MySQL establecida correctamente');
});

module.exports = conexion;
