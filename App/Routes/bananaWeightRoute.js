
const express = require('express');
const { createBananaWeight, getBananaWeightRecords } = require('../controllers/bananaWeightController');

const router = express.Router();

// POST route to create a new banana record
router.post('/manageBananaWeight', createBananaWeight);

// GET route to fetch all banana records
router.get('/bananaWeight', getBananaWeightRecords);

module.exports = router;