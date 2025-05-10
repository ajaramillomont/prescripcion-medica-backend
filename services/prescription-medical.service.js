const { PrescriptionMedical } = require('./../db/models/prescription-medical.model');
const boom = require('@hapi/boom');

class PrescriptionMedicalService {

    async findAll() {
        const prescriptions = await PrescriptionMedical.findAll();
        return prescriptions;
    }

    async findOne(id) {
        const prescription = await PrescriptionMedical.findByPk(id);
        if(!prescription) {
            throw boom.notFound('Prescription not found');
        }
        return prescription;
    }

    async create(data) {
        const newPrescription = await PrescriptionMedical.create(data);
        return newPrescription;
    }

    async update(id, changes) {
        const prescription = await this.findOne(id);
        const updatedPrescription = await prescription.update(changes);
        return updatedPrescription;
    }

    async delete(id) {
        const prescription = await this.findOne(id);
        await prescription.destroy();
        return { id };
    }
}

module.exports = PrescriptionMedicalService; 