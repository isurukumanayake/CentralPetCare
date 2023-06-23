const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getServices, getServiceById, addService, updateService, deleteService} = require('../controllers/serviceController')


router.get('/', getServices)
router.get('/:id', getServiceById)

router.post('/', protect, admin, addService)
router.delete('/:id', protect, admin, deleteService)
router.put('/:id', protect, admin, updateService)

module.exports = router;
