const express = require('express');
const mongoose = require('mongoose');  // For MongoDB
const cors = require('cors');
const bodyParser = require('body-parser');
//const bananaWeightRoute = require('./routes/bananaWeightRoute');
const otpRoute = require('./Routes/otpRoute');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

// mongoose.connect('mongodb+srv://gowtham:gowtham@cluster0.175wl.mongodb.net', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch(err => {
//     console.error('MongoDB connection error:', err);
//   });
  
  // Use the banana record routes
  //app.use('/api', bananaWeightRoute);

  app.use('/otp', otpRoute);
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

  