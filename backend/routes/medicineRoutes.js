const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getMedicines, getOneMedicine, createMedicine, updateMedicine, deleteMedicine} = require('../controllers/medicineController')


router.get('/', protect, admin, getMedicines)
router.get('/:id', protect, admin, getOneMedicine)
router.post('/', protect, admin, createMedicine)
router.put('/:id', protect, admin, updateMedicine)
router.delete('/:id', protect, admin, deleteMedicine)

module.exports = router;