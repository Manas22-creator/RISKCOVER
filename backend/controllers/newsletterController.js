// backend/controllers/newsletterController.js
const { validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler'); // <-- IMPORT
const Subscriber = require('../models/Subscriber');

exports.subscribeToNewsletter = asyncHandler(async (req, res) => { // <-- WRAP WITH asyncHandler
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400); // Set status code before sending response
    throw new Error('Please provide a valid email.'); // This will be caught by our middleware
  }

  const { email } = req.body;

  const subscriber = await Subscriber.findOne({ email });

  if (subscriber) {
    res.status(400);
    throw new Error('This email is already subscribed.');
  }

  const newSubscriber = await Subscriber.create({
    email,
  });

  if (newSubscriber) {
    res.status(201).json({ msg: 'Thank you for subscribing!' });
  } else {
    res.status(400);
    throw new Error('Invalid subscriber data.');
  }
});