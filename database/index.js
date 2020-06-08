const Sequelize = require('sequelize');
const dbConfigs = require('./configs');
 
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');
const PedidoProduto = require('../models/PedidoProduto');
 
// Cliente.hasMany(Pedido, {
// foreignKey: {
// allowNull:false
//  }
// });
 
const connection = newSequelize(dbConfigs);
 
Produto.init(connection);
Cliente.init(connection);
Pedido.init(connection);
PedidoProduto.init(connection);
 
module.exports = connection;

