const express = require('express');
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth.authToken, auth.authAdmin)




module.exports = router