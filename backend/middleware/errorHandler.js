// backend/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  // Log the error for the developer
  console.error(err.stack);

  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // In development mode, we can send more details like the error stack
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};