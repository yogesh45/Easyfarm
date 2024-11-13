const mongoose = require('mongoose');

// Define the schema for the Banana weight model
const bananaWeightSchema = new mongoose.Schema({
  FarmerName: { type: String, required: true },
  ContactNo: { type: String, required: true },
  Date: { type: Date, required: true },
  BananaType: { type: String, required: true },
  TotalBunches: { type: Number, required: true },
  TotalWeight: { type: Number, required: true },
  AverageWeight: { type: Number, required: true },
  Price: { type: Number, required: true },
  TotalAmount: { type: Number, required: true }
}, {
  collection: 'BananaWeight'  // This explicitly sets the collection name
});

// Create a model for the Banana weight schema
const BananaWeight = mongoose.model('BananaWeight', bananaWeightSchema);

// Export the Banana Weight model
module.exports = BananaWeight;