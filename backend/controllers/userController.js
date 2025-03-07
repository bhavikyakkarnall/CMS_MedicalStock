import userService from '../services/userService.js';

export default class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body);
            res.status(201).json({ id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const updated = await userService.updateUser(req.params.id, req.body);
            res.status(200).json({ updated });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const deleted = await userService.deleteUser(req.params.id);
            res.status(200).json({ deleted });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
