// backend/models/GeneralQuote.js
const mongoose = require('mongoose');

const GeneralQuoteSchema = new mongoose.Schema({
  inquiryType: { type: String, required: true }, // e.g., "Health Insurance", "Life Insurance"
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('generalQuote', GeneralQuoteSchema);