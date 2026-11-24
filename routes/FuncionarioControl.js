const express = require('express');
const router = express.Router();
// Importa o Model 
const Funcionario = require('../models/Funcionario');

// Buscar todos (GET /funcionarios) 
router.get('/', async (req, res) => {
    const lista = await Funcionario.findAll({
        order: [['id_funcionario', 'DESC']]
    });
    res.status(200).json(lista);
});

// Cadastrar (POST /funcionarios) 
router.post('/', async (req, res) => {
    const { nome, email, senha, cargo } = req.body;
    await Funcionario.create({ nome, email, senha, cargo });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

// Buscar por id (GET /funcionarios/:id) 
router.get('/:id', async (req, res) => {
    const item = await Funcionario.findByPk(req.params.id);
    res.status(200).json(item);
});

// Deletar (DELETE /funcionarios/:id) 
router.delete('/:id', async (req, res) => {
    await Funcionario.destroy({
        where: { id_funcionario: req.params.id }
    });
    res.status(200).json({ message: 'Excluído com sucesso' });
});

// Atualizar (PUT /funcionarios/:id) 
router.put('/:id', async (req, res) => {
    const { nome, email, senha, cargo } = req.body;
    await Funcionario.update(
        { nome, email, senha, cargo },
        { where: { id_funcionario: req.params.id } }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});

module.exports = router;