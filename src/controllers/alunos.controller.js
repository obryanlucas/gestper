const model = require('../models/alunos.model');

exports.listar = async (req, res, next) => {
  try {
    const alunos = await model.buscarTodos();
    res.json(alunos);
  } catch (err) {
    next(err);
  }
};

exports.buscarPorId = async (req, res, next) => {
  try {
    const aluno = await model.buscarPorId(req.params.id);
    if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
    res.json(aluno);
  } catch (err) {
    next(err);
  }
};

exports.criar = async (req, res, next) => {
  try {
    const { nome, email } = req.body;
    console.log(req.body, "req.body");
    console.log({ nome, email }, "nome e email");
    const id = await model.criar({ nome, email });
    res.status(201).json({ id, nome, email });
  } catch (err) {
    next(err);
  }
};

exports.atualizar = async (req, res, next) => {
  try {
    const { nome, email } = req.body;
    await model.atualizar(req.params.id, { nome, email });
    res.json({ mensagem: 'Animal atualizado' });
    console.log('Animal atualizado')
  } catch (err) {
    next(err);
  }
};

exports.deletar = async (req, res, next) => {
  try {
    await model.deletar(req.params.id);
    res.json({ mensagem: 'Animal removido' });
  } catch (err) {
    next(err);
  }
};
