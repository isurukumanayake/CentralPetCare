const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getTreatments, getTreatmentByID, createTreatment, updateTreatment, deleteTreatment} = require('../controllers/petTreatmentsController')

router.get('/', protect, admin, getTreatments)
router.get('/:id', protect, admin, getTreatmentByID)
router.post('/', protect, admin, createTreatment )
router.put('/:id', protect, admin, updateTreatment)
router.delete('/:id', protect, admin, deleteTreatment)


module.exports = router;