const { Patient } = require('./../db/models/patient.model');
const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

class PatientService {
    async findAll() {
        const patients = await Patient.findAll();
        return patients;
    };

    async findOne(id) {
        const patient = await Patient.findByPk(id);
        if(!patient) {
            throw boom.notFound('Patient not found');
        }
        return patient;
    };

    async create(data) {
        const newPatient = await Patient.create(data);
        return newPatient;
    };

    async update(id, changes) {
        const prescription = await this.findOne(id);
        const updatedPrescription = await prescription.update(changes);
        return updatedPrescription;
    };

    async delete(id) {
        const prescription = await this.findOne(id);
        await prescription.destroy();
        return { id };
    }
}

module.exports = PatientService;