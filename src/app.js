const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Setup

// Security middleware
app.use(helmet());

// Cross-Origin Resource Sharing
app.use(cors());

// HTTP Request Logger
app.use(morgan('dev'));

// JSON Parser Middleware (replaces body-parser)
app.use(express.json());

// Routes Setup
// All API routes will be prefixed with /api
app.use('/api', routes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Express + Prisma + Zod API!');
});

// Error Handling Middleware (must be last)
app.use(errorHandler);

// Start Server
// We check if the file is being run directly (vs imported for tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

module.exports = app;

