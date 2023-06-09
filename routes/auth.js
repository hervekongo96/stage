const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/registrer', authController.registrer)

 
module.exports = router;
