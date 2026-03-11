// backend/routes/generalQuoteRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitGeneralQuote } = require('../controllers/generalQuoteController');

// @route   POST /api/general-quotes
router.post('/',
  [
    check('inquiryType', 'Inquiry type is required').isIn(['Health Insurance', 'Life Insurance', 'Shop & Fire Insurance']),
    check('fullName', 'Full name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Phone number is required').not().isEmpty(),
  ],
  submitGeneralQuote
);

module.exports = router;