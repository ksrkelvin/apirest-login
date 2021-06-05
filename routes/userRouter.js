const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../controllers/authController')

router.post('/register',userController.register)

router.post('/login', userController.login)

router.get('/', auth.authToken, auth.authAdmin, auth.authNormalUser)
module.exports = router