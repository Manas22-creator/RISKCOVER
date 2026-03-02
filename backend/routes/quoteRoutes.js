// backend/routes/quoteRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitQuoteRequest } = require('../controllers/quoteController');
const multer = require('multer');
const path = require('path');

// --- Multer Configuration ---
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/'); // The folder where files will be stored
  },
  filename: function (req, file, cb) {
    // Create a unique filename: fieldname-timestamp.extension
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    }
    cb('Error: File type not supported. Only JPEG, PNG, and PDF are allowed.');
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: fileFilter
});
// --- End of Multer Configuration ---


// @route   POST /api/quotes
router.post('/',
  // 1. Multer middleware for file fields
  upload.fields([
    { name: 'previousPolicy', maxCount: 1 },
    { name: 'uploadRC', maxCount: 1 }
  ]),
  // 2. Validation middleware for text fields
  [

    check('vehicleType', 'Please select a valid vehicle type').isIn(['Car', 'Bike', 'Scooter', 'Truck', 'other']),


    check('vehicleType', 'Vehicle type is required').not().isEmpty(),
    check('fullName', 'Full name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Please enter a valid phone number').isLength({ min: 10 })
  ],
  // 3. Controller function
  submitQuoteRequest
);

module.exports = router;