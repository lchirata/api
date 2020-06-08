const Model = require ('sequelize').Model;
const DataTypes = require('sequelize').DataTypes;

class Cliente extends Model {
    static init (connection){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,

        }, {
            sequelize: connection
        })
    }
}
module.exports = Cliente;
