const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static associate(models) {
        this.hasMany(models.PrescriptionMedical, {
            foreignKey: 'medicoId',
            as: 'prescripciones'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'users',
            modelName: 'User',
            timestamps: false
        }
    }
}

const USERS_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },

    password: {
        allowNull: false,
        type: DataTypes.STRING
    },

    correo: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },

    rol: {
        allowNull: false,
        type: DataTypes.ENUM('medico', 'admin', 'asistente'),
        defaultValue: 'medico'
    },

    recoveryToken: {
        allowNull: true,
        type: DataTypes.STRING,
    }

}

module.exports = { User, USERS_TABLE, UserSchema }