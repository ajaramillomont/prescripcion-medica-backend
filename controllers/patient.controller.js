const PatientService = require('./../services/patient.service');
const service = new PatientService();

const getPatients = async (req, res, next) => {
    try {
        const patients = await service.findAll();
        res.json(patients);
    } catch (error) {
        next(error);
    }
};

const getPatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await service.findOne(id);
        res.json(patient);
    } catch (error) {
        next(error);
    }
};

const createPatient = async (req, res, next) => {
    try {
        const body = req.body;
        const newPatient = await service.create(body);
        res.status(201).json(newPatient);
    } catch (error) {
        next(error);
    }
};


const updatePatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedPatient = await service.update(id, body);
        res.json(updatedPatient);
    } catch (error) {
        next(error);
    }
};

const deletePatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.json({ message: 'Patient eliminado correctamente' });
    } catch (error) {
        
    }
}


module.exports = { getPatients, getPatient, createPatient, updatePatient, deletePatient}
