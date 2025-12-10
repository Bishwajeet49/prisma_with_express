const express = require('express');
const userController = require('../controllers/user.controller');
const validate = require('../middleware/validate');
const { createUserSchema, updateUserSchema } = require('../utils/validators');

const router = express.Router();

// Define routes and associate them with controller methods and middleware

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get a specific user by ID
router.get('/:id', userController.getUserById);

// POST /api/users - Create a new user
// Includes validation middleware using Zod schema
router.post('/', validate(createUserSchema), userController.createUser);

// PUT /api/users/:id - Update a user
// Includes validation middleware
router.put('/:id', validate(updateUserSchema), userController.updateUser);

// DELETE /api/users/:id - Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;

