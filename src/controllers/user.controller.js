const userService = require('../services/user.service');

/**
 * User Controller
 * This layer handles HTTP requests and responses.
 * It parses the request, calls the service layer, and sends the response.
 * It should catch errors and pass them to the error handling middleware.
 */
class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({ status: 'success', data: users });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({ status: 'success', data: user });
    } catch (error) {
      if (error.message === 'User not found') {
        return res.status(404).json({ status: 'error', message: error.message });
      }
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({ status: 'success', data: user });
    } catch (error) {
      if (error.message === 'User with this email already exists') {
        return res.status(409).json({ status: 'error', message: error.message });
      }
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({ status: 'success', data: user });
    } catch (error) {
       if (error.message === 'User not found') {
        return res.status(404).json({ status: 'error', message: error.message });
      }
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).send(); // No content
    } catch (error) {
       if (error.message === 'User not found') {
        return res.status(404).json({ status: 'error', message: error.message });
      }
      next(error);
    }
  }
}

module.exports = new UserController();

