// Simple in-memory store for OTPs.
//TODO : In future it should be replaced with package which uses TOTP/IOTP.

let otpStore = {};  // Format: { phoneNumber: { otp: '123456', expireAt: timestamp } }

// Controller function to get all BananaRecords
const sendOTP = async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        if (!phoneNumber) {
          return res.status(400).send('Phone number is required');
        }
      
        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
      
        // Save OTP and expiration time (e.g., 5 minutes validity)
        otpStore[phoneNumber] = { otp, expireAt: Date.now() + 5 * 60 * 1000 };      
        

        res.status(200).send(otp);
      
        // Send OTP via SMS using Twilio
      //   try {
      //     await client.messages.create({
      //       body: `Your OTP code is: ${otp}`,
      //       from: process.env.TWILIO_PHONE_NUMBER,
      //       to: phoneNumber,
      //     });
      //     res.status(200).send('OTP sent successfully');
      //   } catch (error) {
      //     console.error('Twilio Error:', error);
      //     res.status(500).send('Failed to send OTP');
      //   }
    } catch (err) {
      res.status(500).json({ message: 'Error while sending OTP', error: err });
    }
  };

  // Controller function to get all BananaRecords
const verifyOTP = async (req, res) => {
    try {
        const { phoneNumber, otp } = req.body;
  
        if (!phoneNumber || !otp) {
          return res.status(400).send('Phone number and OTP are required');
        }
      
        // Check if OTP exists and is valid
        const storedOtpData = otpStore[phoneNumber];
      
        if (!storedOtpData) {
          return res.status(400).send('OTP not sent to this number');
        }
      
        if (Date.now() > storedOtpData.expireAt) {
          delete otpStore[phoneNumber];  // OTP expired
          return res.status(400).send('OTP has expired');
        }
      
        if (storedOtpData.otp !== otp) {
          return res.status(400).send('Invalid OTP');
        }
        
        // Clean up OTP store after successful verification
        delete otpStore[phoneNumber];
      
        res.status(200).json({ message: 'Login successful', phoneNumber });
    } catch (err) {
      res.status(500).json({ message: 'Error while validating OTP', error: err });
    }
  };

  module.exports = {
    sendOTP,
    verifyOTP
  };