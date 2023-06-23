const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getStaff, getStaffById, addStaff, updateStaff, deleteStaff} = require('../controllers/staffController')


router.get('/', protect, admin, getStaff)
router.get('/:id', protect, admin, getStaffById)
router.post('/', protect, admin, addStaff)
router.delete('/:id', protect, admin, deleteStaff)
router.put('/:id', protect, admin, updateStaff)

module.exports = router;