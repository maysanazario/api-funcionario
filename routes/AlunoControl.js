const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

// GET /alunos
router.get('/', async (req, res) => {
  try {
    const lista = await Aluno.findAll({ order: [['id_aluno', 'DESC']] });
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: 'Erro ao listar', erro: e.message });
  }
});

// GET /alunos/:id
router.get('/:id', async (req, res) => {
  try {
    const item = await Aluno.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.status(200).json(item);
  } catch (e) {
    res.status(500).json({ message: 'Erro ao buscar', erro: e.message });
  }
});

// POST /alunos
router.post('/', async (req, res) => {
  try {
    const { nome, email, curso } = req.body;
    await Aluno.create({ nome, email, curso });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    res.status(500).json({ message: 'Erro ao cadastrar', erro: e.message });
  }
});

// PUT /alunos/:id
router.put('/:id', async (req, res) => {
  try {
    const { nome, email, curso } = req.body;
    await Aluno.update({ nome, email, curso }, { where: { id_aluno: req.params.id } });
    res.status(200).json({ message: 'Atualizado com sucesso' });
  } catch (e) {
    res.status(500).json({ message: 'Erro ao atualizar', erro: e.message });
  }
});

// DELETE /alunos/:id
router.delete('/:id', async (req, res) => {
  try {
    await Aluno.destroy({ where: { id_aluno: req.params.id } });
    res.status(200).json({ message: 'Excluído com sucesso' });
  } catch (e) {
    res.status(500).json({ message: 'Erro ao excluir', erro: e.message });
  }
});

module.exports = router;