// backend/controllers/quoteController.js
const { validationResult } = require('express-validator');
const Quote = require('../models/Quote');

exports.submitQuoteRequest = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check if files were uploaded
  if (!req.files || !req.files.previousPolicy || !req.files.uploadRC) {
      return res.status(400).json({ msg: 'Please upload both required files.' });
  }

  // Text fields are in req.body
  const { vehicleType, fullName, email, phone } = req.body;
  
  // File info is in req.files
  const previousPolicyPath = req.files.previousPolicy[0].path;
  const rcPath = req.files.uploadRC[0].path;

  try {
    const newQuote = new Quote({
      vehicleType,
      fullName,
      email,
      phone,
      previousPolicyPath,
      rcPath,
    });

    const quote = await newQuote.save();
    res.status(201).json({ msg: 'Quote request received successfully!', quote });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};