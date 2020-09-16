const { userService } = require('../services');
const { hashPass  } = require('../helpers');

module.exports = {
    getAllUsers: (req, res, next) => {
        try {
            const users = userService.fetchAll();
            // res.render('users', { arr: users });
            res.json(users);
        } catch (e) {
            // res.end(e.message);
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const user = userService.getUserById(+req.params.id)
            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    removeUser: (req, res, next) => {
        try {
            const user = userService.removeUserById(+req.params.id)
            res.json(user);
        } catch (e) {
            // res.end(e.message);
            next(e);
        }

    },

    createUser: async (req, res, next) => {
        try {
            const user = req.body;
            user.password = await hashPass(user.password)
            const newUser = await userService.create(user);
            res.json(newUser);
        } catch (e) {
            // res.end(e.message);
            next(e);
        }

    }
}
