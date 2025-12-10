const prisma = require('../config/db');

/**
 * User Repository
 * This layer interacts directly with the database using Prisma.
 * It should not contain business logic, only data access methods.
 */
class UserRepository {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data) {
    return await prisma.user.create({
      data,
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

module.exports = new UserRepository();

