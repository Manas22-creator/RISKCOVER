const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  inquiryType: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String }, // Optional
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('contact', ContactSchema);