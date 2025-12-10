/**
 * Middleware to validate request data against a Zod schema.
 * @param {Object} schema - The Zod schema to validate against (can include body, query, params).
 */
const validate = (schema) => (req, res, next) => {
  try {
    // Validate request against schema
    // We check body, query, and params if they exist in the schema
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    // If validation fails, return 400 Bad Request with error details
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: error.errors,
    });
  }
};

module.exports = validate;

