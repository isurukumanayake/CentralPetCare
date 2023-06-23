const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getPayroll, getPayrollById, addPayroll, updatePayroll, deletePayroll} = require('../controllers/payrollController')


router.get('/', protect, admin, getPayroll)
router.get('/:id', protect, admin, getPayrollById)
router.post('/', protect, admin, addPayroll)
router.delete('/:id', protect, admin, deletePayroll)
router.put('/:id', protect, admin, updatePayroll)

module.exports = router;