const { compareOfPass } = require('../helpers');

module.exports = {
    logIn: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body
            await compareOfPass(password, user.password);
            res.json('Login was successfully')

        } catch (e) {
            next(e);
        }
    }
}
