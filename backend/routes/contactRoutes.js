// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitContactForm } = require('../controllers/contactController');

router.post(
  '/',
  [
    check('fullName', 'Full name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message must be at least 10 characters long').isLength({ min: 10 })
  ],
  submitContactForm
);

module.exports = router;
