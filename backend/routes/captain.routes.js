const express = require('express')
const router = express.Router();
const { body } = require("express-validator")
const captainController = require('../controllers/captain.controller')
const authMiddleware=require('../middlewares/auth.middleware');

router.post('/register', [
    body('firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', captainController.logoutCaptain)

module.exports = router