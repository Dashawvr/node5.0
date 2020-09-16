const connection = require('../dataBase').getInstance();

module.exports = {
    fetchAll: () => {
        const User = connection.getModel('User');
        return User.findAll({});
    },

    getUserById: (id) => {
        const User = connection.getModel('User');
        return User.findByPk(id);
    },

    removeUserById: (id) => {
        const User = connection.getModel('User');
        return User.destroy({
            where: {
                id
            }
        })
    },
    create: (userObject) => {
        const User = connection.getModel('User');
        return User.create(userObject, {new: true});
    },
    findByEmail: (emailObj) => {
        const User = connection.getModel('User');
        return User.findOne({
            where: emailObj
        })
    }
}
