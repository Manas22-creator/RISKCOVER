// backend/routes/newsletterRoutes.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { subscribeToNewsletter } = require('../controllers/newsletterController');

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe an email to the newsletter
// @access  Public
router.post(
  '/subscribe',
  [
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
  ],
  subscribeToNewsletter
);

module.exports = router;