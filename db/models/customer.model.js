const { DataTypes, Model } = require('sequelize');

class Customer extends Model {
    static associate(){}
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMERS_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

const CUSTOMERS_TABLE = 'customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nombres: {
        allowNull: false,
        type: DataTypes.STRING
    },

    apellidos: {
        allowNull: false,
        type: DataTypes.STRING
    },

    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },

    direccion: {
        allowNull: true,
        type: DataTypes.STRING
    },

    telefono: {
        allowNull: true,
        type: DataTypes.STRING
    }
}

module.exports = { Customer, CUSTOMERS_TABLE, CustomerSchema}