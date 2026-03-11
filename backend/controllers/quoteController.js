// backend/controllers/quoteController.js
const { validationResult } = require('express-validator');
const Quote = require('../models/Quote');

exports.submitQuoteRequest = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { vehicleType, vehicleNumber, fullName, email, phone } = req.body;

  try {
    const newQuote = new Quote({
      vehicleType,
      vehicleNumber,
      fullName,
      email,
      phone,
    });
    const quote = await newQuote.save();
    res.status(201).json({ msg: 'Vehicle quote request received successfully!', quote });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};