const db = require('../db');
// Tabela e model com o MESMO nome: 'funcionario' 
const Funcionario = db.sequelize.define('funcionario', {
    id_funcionario: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: { type: db.Sequelize.STRING(100), allowNull: false },
    email: { type: db.Sequelize.STRING(120), allowNull: false },
    senha: { type: db.Sequelize.STRING(60), allowNull: false },
    cargo: { type: db.Sequelize.STRING(60), allowNull: false }
}, {
    freezeTableName: true,   // não pluraliza 
    timestamps: false
    // sem createdAt/updatedAt 
});
module.exports = Funcionario; 
