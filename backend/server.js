// backend/server.js

const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

// 2. INITIALIZE APP & CONNECT TO DB
const app = express();
connectDB();

// 3. CORE MIDDLEWARE
app.use(express.json()); // Allows the app to accept JSON in request bodies

// 4. API ROUTES
// Define all your API endpoints. Any request starting with these paths will be handled by the router.
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/quotes', require('./routes/quoteRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

// 5. PRODUCTION DEPLOYMENT CONFIGURATION
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  // Change 'build' to 'dist' here
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // For any route that is not an API route, serve the main index.html file.
  app.get(/^(?!\/api).*/, (req, res) => {
    // Change 'build' to 'dist' here as well
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

// 6. CENTRALIZED ERROR HANDLER
// This MUST be the last piece of middleware. Express knows that any middleware with 4 arguments
// (err, req, res, next) is an error handler. It will catch any errors thrown in your controllers.
app.use(errorHandler);

// 7. START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
