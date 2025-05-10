const { Model, DataTypes } = require('sequelize');

class PrescriptionMedical extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'medicoId',
      as: 'medico'
    });
    this.belongsTo(models.Patient, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRESCRIPTION_MEDICAL_TABLE,
      modelName: 'PrescriptionMedical',
      timestamps: false
    };
  }
}

const PRESCRIPTION_MEDICAL_TABLE = 'prescriptions';

const PrescriptionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  medicoId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },

  pacienteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  fecha: {
    allowNull: true,
    type: DataTypes.DATEONLY
  },

  diagnostico: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      len: [0, 255]
    }
  },

  indicacionesGenerales: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      len: [0, 255]
    }
  }
};



module.exports = { PrescriptionMedical, PRESCRIPTION_MEDICAL_TABLE, PrescriptionSchema };
