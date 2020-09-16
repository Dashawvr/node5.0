const { userService } = require('../services');
const { hashPass  } = require('../helpers');

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

    createUser: async (req, res) => {
        try {
            const user = req.body;
            user.password = await hashPass(user.password)
            const newUser = await userService.create(user);
            res.json(newUser);
        } catch (e) {
            res.end(e.message);
        }

    }
}
