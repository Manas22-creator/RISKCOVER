const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true },
  vehicleYear: { type: String, required: true },
  vehicleMake: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true }, // Added
  zipCode: { type: String, required: true }, // Added
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('quote', QuoteSchema);