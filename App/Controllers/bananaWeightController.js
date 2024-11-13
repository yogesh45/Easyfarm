// controllers/bananaRecordController.js
const BananaWeight = require('../Models/bananaWeightModel');

// Controller function to create a new BananaRecord
const createBananaWeight = async (req, res) => {
  try {
    const { 
      FarmerName, 
      ContactNo, 
      Date, 
      BananaType, 
      TotalBunches, 
      TotalWeight, 
      AverageWeight, 
      Price,
      TotalAmount 
    } = req.body;

    // Create a new BananaRecord instance with the data
    const newBananaWeightRecord = new BananaWeight({
      FarmerName,
      ContactNo,
      Date,
      BananaType,
      TotalBunches,
      TotalWeight,
      AverageWeight,
      Price,
      TotalAmount
    });

    // Save the new BananaRecord to the database
    await newBananaWeightRecord.save();

    // Return the saved record in the response
    res.status(201).json(newBananaWeightRecord);
  } catch (err) {
    res.status(500).json({ message: 'Error saving banana record', error: err });
  }
};

// Controller function to get all BananaRecords
const getBananaWeightRecords = async (req, res) => {
  try {
    const records = await BananaWeight.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving banana records', error: err });
  }
};

module.exports = {
  createBananaWeight,
  getBananaWeightRecords
};
