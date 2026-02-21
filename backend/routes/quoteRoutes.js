// backend/routes/quoteRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); // Import the 'check' function
const { submitQuoteRequest } = require('../controllers/quoteController');

// @route   POST /api/quotes
// @desc    Submit a new quote request
// @access  Public
router.post('/',
  [ // <-- This is the validation middleware array
    // Vehicle Info Validation
    check('vehicleType', 'Vehicle type is required').isIn(['Car', 'Bike', 'Truck', 'Fleet']),
    check('vehicleYear', 'Please enter a valid 4-digit year').isLength({ min: 4, max: 4 }).isNumeric(),
    check('vehicleMake', 'Vehicle make is required').not().isEmpty().trim().escape(),

    // Personal Info Validation
    check('fullName', 'Full name is required').not().isEmpty().trim().escape(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
    check('dob', 'Date of birth is required').not().isEmpty(),
    check('zipCode', 'Please enter a valid 5-digit ZIP code').isLength({ min: 5, max: 6 }).isNumeric()
  ],
  submitQuoteRequest // If validation passes, this controller function will run
);

module.exports = router;