const { userService } = require('../services');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.fetchAll();
            res.render('users', { arr: users });
        } catch (e) {
            res.end(e.message);
        }
    },

    getUserById: (req, res) => {
        try {
            const user = userService.getUserById(+req.params.id)
            res.json(user);
        } catch (e) {
            res.end(e.message);
        }
    },

    removeUser: (req, res) => {
        try {
            const user = userService.removeUserById(+req.params.id)
            res.json(user);
        } catch (e) {
            res.end(e.message);
        }

    },

    createUser: (req, res) => {
        try {
            const newUsers = userService.create(req.body);
            res.json(newUsers);
        } catch (e) {
            res.end(e.message);
        }

    }
}
