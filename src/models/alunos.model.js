const db = require('../config/db');

exports.buscarTodos = async () => {
  const [rows] = await db.promise().query('SELECT * FROM alunos');
  return rows;
};

exports.buscarPorId = async (id) => {
  const [rows] = await db.promise().query(
    'SELECT * FROM alunos WHERE id = ?',
    [id]
  );
  return rows[0];
};

exports.criar = async ({ nome, email }) => {
  const [result] = await db.promise().query(
    'INSERT INTO alunos (nome, email) VALUES (?, ?)',
    [nome, email]
  );
  return result.insertId;
};

exports.atualizar = async (id, { nome, email }) => {
  await db.promise().query(
    'UPDATE alunos SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  );
};

exports.deletar = async (id) => {
  await db.promise().query(
    'DELETE FROM alunos WHERE id = ?',
    [id]
  );
};
