const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  // 👈 pon tu contraseña real de MySQL
  database: 'prontopizza',
});

conexion.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conexión exitosa a MySQL');
});
