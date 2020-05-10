const Sequelize = require('sequelize');
const dbConfig = require('./configs');

const Produto = require('../models/Produto');

const connection = new Sequelize(dbConfig);


Produto.init(connection);

module.exports = connection;