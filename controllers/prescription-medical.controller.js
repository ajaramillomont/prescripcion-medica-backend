const PrescriptionMedicalService = require('./../services/prescription-medical.service');
const service = new PrescriptionMedicalService();

const getPrescriptions = async(req, res, next) => {
    try {
        const prescriptions = await service.findAll();
        res.json(prescriptions);
    } catch (error) {
        next(error);
    }
}

const getPrescription = async(req, res, next) => {
    try {
        const { id } = req.params;
        const prescription = await service.findOne(id);
        res.json(prescription);
    } catch (error) {
        next(error);
    }
}

const createPrescription = async(req, res, next) => {
    try {
        const body = req.body;
        const newPrescription = await service.create(body);
        res.status(201).json(newPrescription);
    } catch (error) {
        next(error);
    }
}

const updatePrescription = async(req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatePrescription = await service.update()
    } catch (error) {
        next(error);
    }
}

const deletePrescription = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.json({ message: 'Prescription eliminada con éxito'})
    } catch (error) {
        next(error);
    }
} 

module.exports = { getPrescriptions, getPrescription, createPrescription, updatePrescription, deletePrescription };