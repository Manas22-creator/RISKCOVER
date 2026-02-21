const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  // Destructure ALL new fields from the body
  const { inquiryType, fullName, email, phone, subject, message } = req.body;

  try {
    const newContact = new Contact({
      inquiryType,
      fullName,
      email,
      phone,
      subject,
      message,
    });

    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully!', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};