const { Model, DataTypes} = require('sequelize');

class Produto extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING, 
            descricao: DataTypes.STRING,
            preco: DataTypes.FLOAT,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = Produto;