const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',  // corrigido aqui
  database: process.env.DB_DATABASE || 'loja',  // corrigido aqui
  port: 3306
});

// Testa a conexão pegando uma conexão do pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
  connection.release();  // libera a conexão para o pool
});

module.exports = pool;
