// backend/routes/quoteRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitQuoteRequest } = require('../controllers/quoteController');

// @route   POST /api/quotes (This is now only for VEHICLE quotes)
router.post('/',
  [
    check('vehicleType', 'Please select a valid vehicle type').isIn(['Car', 'Bike', 'Scooter', 'Commercial Vehicle', 'Other']),
    check('vehicleNumber', 'Vehicle number is required').not().isEmpty(),
    check('fullName', 'Full name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Please enter a valid phone number').isLength({ min: 10 })
  ],
  submitQuoteRequest
);

module.exports = router;