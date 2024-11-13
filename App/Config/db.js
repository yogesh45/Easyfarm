const mongoose = require('mongoose');

// MongoDB connection
const connectMongoDB = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection failed', err));
};

const connectDB = () => {
  const dbType = process.env.DB_TYPE || 'mongodb';
  if (dbType === 'mongodb') {
    connectMongoDB();
  } else if (dbType === 'postgres') {
    connectPostgresDB();
  }
};

module.exports = connectDB;