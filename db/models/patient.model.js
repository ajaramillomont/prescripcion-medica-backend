const { DataTypes, Model} = require('sequelize');

class Patient extends Model {
    static associate(models) {
        this.hasMany(models.PrescriptionMedical, {
            foreignKey: 'pacienteId',
            as: 'prescriptions'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PATIENTS_TABLE,
            modelName: 'Patient',
            timestamps: false
        }
    }
}

const PATIENTS_TABLE = 'patients';

const PatientSchema = {
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

    fechaNacimiento: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },

    genero: {
        allowNull: true,
        type: DataTypes.ENUM('masculino', 'femenino'),
    },

    cedula: {
        allowNull: false,
        type: DataTypes.STRING
    },

    telefono: {
        allowNull: false,
        type: DataTypes.STRING
    },

    direccion: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

module.exports = { Patient, PATIENTS_TABLE, PatientSchema };