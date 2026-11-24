const express = require('express'); 
const cors = require('cors'); 
const { sequelize } = require('./db'); 
const rotasFuncionario = require('./routes/FuncionarioControl'); 
const rotasAluno = require('./routes/AlunoControl');
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 

 
app.get('/', (req, res) => res.send('API Funcionário (Sequelize + CommonJS) - OK')); 
app.use('/funcionarios', rotasFuncionario);
app.use('/alunos', rotasAluno); 
 
const PORT = 3000; 
 
(async () => { 
  try { 
    await sequelize.authenticate(); 
    app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 
  } catch (err) { 
    console.error('Erro ao conectar no banco:', err); 
    process.exit(1); 
  } 
})();