const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment} = require('../controllers/appointmentController')

router.post('/', createAppointment)

router.get('/', protect, admin, getAppointments)
router.get('/:id', protect, admin, getAppointmentById)
router.put('/:id', protect, admin, updateAppointment)
router.delete('/:id', protect, admin, deleteAppointment)

module.exports = router;