/**
 * Middleware to validate request data against a Zod schema.
 * @param {Object} schema - The Zod schema to validate against (can include body, query, params).
 */
const { ZodError } = require('zod');

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
    // If validation fails, return 400 Bad Request with user-friendly error details
    const issues =
      (error instanceof ZodError ? error.issues : error?.errors) || [];
console.log(issues);

    const details = issues.map((issue) => ({
      path: Array.isArray(issue.path) ? issue.path.join('.') : String(issue.path),
      message: issue.message,
      code: issue.code,
    }));

    return res.status(400).json({
      status: 'error',
      message: details[0]?.message || 'Validation failed',
      errors: details,
    });
  }
};

module.exports = validate;

