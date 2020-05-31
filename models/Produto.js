const Model = require('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class Produto extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING, 
            preco: DataTypes.FLOAT,
            fornecedor: DataTypes.STRING,
            imagem: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Produto;
