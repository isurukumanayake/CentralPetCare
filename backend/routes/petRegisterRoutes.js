const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getPets, getPetByID, createPet, updatePet, deletePet} = require('../controllers/petRegisterController')

router.get('/', protect, admin, getPets)
router.get('/:id', protect, admin, getPetByID)
router.post('/', protect, admin, createPet )
router.put('/:id', protect, admin, updatePet)
router.delete('/:id', protect, admin, deletePet)


module.exports = router;