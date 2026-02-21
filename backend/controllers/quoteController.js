// backend/controllers/quoteController.js
const { validationResult } = require('express-validator'); // Import validationResult
const Quote = require('../models/Quote');

exports.submitQuoteRequest = async (req, res) => {
  // 1. Check for validation errors first
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are errors, return a 400 status with the specific errors
    return res.status(400).json({ errors: errors.array() });
  }

  // 2. If validation passes, proceed with the existing logic
  const { vehicleType, vehicleYear, vehicleMake, fullName, email, dob, zipCode } = req.body;

  try {
    const newQuote = new Quote({
      vehicleType,
      vehicleYear,
      vehicleMake,
      fullName,
      email,
      dob,
      zipCode,
    });

    const quote = await newQuote.save();
    res.status(201).json({ msg: 'Quote request received successfully!', quote });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};