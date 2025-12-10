const express = require('express');
const userRoutes = require('./user.routes');

const router = express.Router();

// Mount user routes at /users
router.use('/users', userRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

module.exports = router;

