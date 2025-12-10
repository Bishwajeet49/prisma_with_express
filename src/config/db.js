const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
// This instance will be used to interact with the database across the application.
// Prisma will automatically read the DATABASE_URL from the .env file
const prisma = new PrismaClient();

module.exports = prisma;

