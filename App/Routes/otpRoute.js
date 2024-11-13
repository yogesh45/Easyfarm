
const express = require('express');

const { sendOTP, verifyOTP } = require('../Controllers/otpController');

const router = express.Router();

// POST route to send OTP
router.post('/sendOTP', sendOTP);

console.log("send otp path registered")

// GET route to verify OTP
router.post('/verifyOTP', verifyOTP);

console.log("verify otp path registered")



module.exports = router;