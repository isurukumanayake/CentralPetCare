const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getLeave, getLeaveById, addLeave, updateLeave, deleteLeave} = require('../controllers/leaveController')


router.get('/', protect, admin, getLeave)
router.get('/:id', protect, admin, getLeaveById)
router.post('/', protect, admin,  addLeave)
router.delete('/:id', protect, admin, deleteLeave)
router.put('/:id', protect, admin, updateLeave)

module.exports = router;