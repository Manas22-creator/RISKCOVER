// src/utils/validation.js

export const validateQuoteForm = (formData, isVehicleQuote) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/; // Allows only 10 digit phone numbers

  // Validate common fields
  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }
  if (!formData.email) {
    errors.email = 'Email is required.';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!formData.phone) {
    errors.phone = 'Phone number is required.';
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (10 digits).';
  }

  // Validate vehicle-specific fields
  if (isVehicleQuote) {
    if (!formData.vehicleNumber.trim()) {
      errors.vehicleNumber = 'Vehicle number is required.';
    }
  }

  return errors;
};