'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.createTable('produtos', { 
        id: { 
          type: Sequelize.INTEGER,
          primarykey: true, 
          autoIncremet: true,
          allowNull: false,
        },
        nome: { 
          type: Sequelize.STRING
        },
        preco: { 
          type: Sequelize.FLOAT
        },
        imagem: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.STRING
        },
        fornecedor: {
          type: Sequelize.STRING
        }
      
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
