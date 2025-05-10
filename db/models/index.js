const { User, UserSchema} = require('./../models/user.model');
const { Customer, CustomerSchema} = require('./../models/customer.model');
const { ContactMessage, ContactMessageSchema } = require('./../models/contact-message.model');
const { PrescriptionMedical, PrescriptionSchema } = require('./prescription-medical.model');
const { Patient, PatientSchema} = require('./patient.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    ContactMessage.init(ContactMessageSchema, ContactMessage.config(sequelize));
    PrescriptionMedical.init(PrescriptionSchema, PrescriptionMedical.config(sequelize));
    Patient.init(PatientSchema, Patient.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    ContactMessage.associate(sequelize.models);
    PrescriptionMedical.associate(sequelize.models);
    Patient.associate(sequelize.models);
}

module.exports = setupModels;