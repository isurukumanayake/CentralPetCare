const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getPrescriptions, getOnePrescription, createPrescription, updatePrescription, deletPrescription} = require('../controllers/prescriptionController')


router.get('/', protect, admin, getPrescriptions)
router.get('/:id', protect, admin, getOnePrescription)
router.post('/', protect, admin, createPrescription)
router.put('/:id', protect, admin, updatePrescription)
router.delete('/:id', protect, admin, deletPrescription)

module.exports = router;