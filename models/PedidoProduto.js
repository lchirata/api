const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class PedidoProdutos extends Model {
    static init(connection) {
        super.init({
           id_pedido: DataTypes.INTEGER,
           id_produto: DataTypes.INTEGER,
           preco: DataTypes.FLOAT,
           quantidade: DataTypes.INTEGER

        }, {
            sequelize: connection
        })
    }
}

module.exports = PedidoProdutos;