const express = require('express');
const { getPatients, getPatient, createPatient, updatePatient, deletePatient } = require('./../controllers/patient.controller');

const router = express.Router();


router.get('/', getPatients);
router.get('/:id', getPatient);
router.post('/', createPatient);
router.patch('/:id', updatePatient);
router.delete('/:id', deletePatient);


module.exports = router;