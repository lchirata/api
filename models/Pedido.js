const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class Pedido extends Model {
    static init(connection) {
        super.init({
            cliente_id: DataTypes.INTEGER,
            total: DataTypes.FLOAT,
            data: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Pedido;


