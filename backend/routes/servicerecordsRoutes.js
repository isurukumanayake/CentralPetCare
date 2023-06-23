const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getServiceRecords, getServiceRecordById, addServiceRecord, updateServiceRecord, deleteServiceRecord} = require('../controllers/servicerecordsController')


router.get('/', protect, admin, getServiceRecords)
router.get('/:id', protect, admin, getServiceRecordById)
router.post('/', protect, admin, addServiceRecord)
router.delete('/:id', protect, admin, deleteServiceRecord)
router.put('/:id', protect, admin, updateServiceRecord)

module.exports = router;
