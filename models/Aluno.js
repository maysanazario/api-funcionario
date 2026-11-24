const db = require('../db');

const Aluno = db.sequelize.define('aluno', {
  id_aluno: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:  { type: db.Sequelize.STRING(100), allowNull: false },
  email: { type: db.Sequelize.STRING(120), allowNull: false },
  curso: { type: db.Sequelize.STRING(60),  allowNull: false }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Aluno;