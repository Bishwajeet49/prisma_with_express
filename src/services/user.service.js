const userRepository = require('../repositories/user.repository');

/**
 * User Service
 * This layer contains business logic.
 * It interacts with the repository layer to fetch or persist data.
 * Validations and calculations specific to business rules happen here.
 */
class UserService {
  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    const user = await userRepository.findById(parseInt(id));
    if (!user) {
      throw new Error('User not found'); // In a real app, use a custom Error class with status 404
    }
    return user;
  }

  async createUser(data) {
    // Check if user already exists
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    return await userRepository.create(data);
  }

  async updateUser(id, data) {
    // We can add logic to ensure the user exists before updating
    // or rely on Prisma throwing an error (though checking first is cleaner for specific error messages)
    await this.getUserById(id); // Throws if not found
    return await userRepository.update(parseInt(id), data);
  }

  async deleteUser(id) {
    await this.getUserById(id); // Throws if not found
    return await userRepository.delete(parseInt(id));
  }
}

module.exports = new UserService();

