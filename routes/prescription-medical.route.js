const express = require('express');
const { getPrescriptions, getPrescription, createPrescription, updatePrescription, deletePrescription } = require('./../controllers/prescription-medical.controller');

const router = express.Router();


router.get('/', getPrescriptions);
router.get('/:id', getPrescription);
router.post('/', createPrescription);
router.patch('/:id', updatePrescription);
router.delete('/:id', deletePrescription);


module.exports = router;