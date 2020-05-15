'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('produtos', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true, 
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.STRING
        }, 
        preco: {
          type: Sequelize.FLOAT
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produtos');
  }
};
