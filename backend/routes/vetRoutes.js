const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getVets, getOneVet, createVet, updateVet, deleteVet} = require('../controllers/vetController')


router.get('/', getVets)
router.get('/:id', getOneVet)

router.post('/', protect, admin, createVet)
router.put('/:id', protect, admin, updateVet)
router.delete('/:id', protect, admin, deleteVet)

module.exports = router;