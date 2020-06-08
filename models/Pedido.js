const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class Pedido extends Model {
    static init(connection) {
        super.init({
            total: DataTypes.FLOAT,
            data: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Pedido;


