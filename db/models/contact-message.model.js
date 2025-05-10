const { DataTypes, Model } = require('sequelize');

class ContactMessage extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTACT_MESSAGES_TABLE,
      modelName: 'ContactMessage',
      timestamps: false
    };
  }
}

const CONTACT_MESSAGES_TABLE = 'contact_messages';

const ContactMessageSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  mensaje: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

module.exports = { ContactMessage, CONTACT_MESSAGES_TABLE, ContactMessageSchema };
