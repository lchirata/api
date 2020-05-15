const Sequelize = require ('sequelize');
const dbConfigs = require ('./configs');

const Produto = require('../models/Produto');

const connection = new Sequelize(dbConfigs);
Produto.init(connection);

module.exports = connection;