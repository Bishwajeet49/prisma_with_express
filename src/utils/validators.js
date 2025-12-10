const { z } = require('zod');

// User Validation Schemas

// Schema for creating a new user
const createUserSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
  }),
});

// Schema for updating a user
const updateUserSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    name: z.string().min(2).optional(),
  }),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
};

