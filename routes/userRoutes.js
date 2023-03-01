const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
    getAllUsers
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUser);
router.get('/list', protectAdmin, getAllUsers)

module.exports = router