// backend/models/Quote.js
const mongoose = require('mongoose');

// This schema is now ONLY for vehicle-related quotes.
const QuoteSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('quote', QuoteSchema);