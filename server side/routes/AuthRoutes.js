const express = require('express');
const router = express.Router();
const {
    addNewUser,
    LogInUser,
    getUserEmail
} = require('../controllers/AuthController')


// Sign Up User
router.post('/register', addNewUser)

// Sign In User
router.post('/signin', LogInUser)

// checking User
router.post('/signin/checkUser', getUserEmail)

module.exports = router;