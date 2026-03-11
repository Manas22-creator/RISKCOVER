// backend/controllers/generalQuoteController.js
const { validationResult } = require('express-validator');
const GeneralQuote = require('../models/GeneralQuote');

exports.submitGeneralQuote = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { inquiryType, fullName, email, phone } = req.body;

  try {
    const newQuote = new GeneralQuote({ inquiryType, fullName, email, phone });
    const quote = await newQuote.save();
    res.status(201).json({ msg: 'Inquiry received successfully!', quote });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};