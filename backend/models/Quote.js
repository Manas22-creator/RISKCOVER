// backend/models/Quote.js
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  // Kept from original
  vehicleType: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  
  // New fields
  phone: { type: String, required: true },
  previousPolicyPath: { type: String, required: true }, // Path to the policy file
  rcPath: { type: String, required: true }, // Path to the RC file

  // Internal use
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('quote', QuoteSchema);