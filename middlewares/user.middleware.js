const {ErrorHandler, errors, statusCodeEnum} = require('../error');
const {userService} = require('../services');
const {userValidator: {userValidator}} = require('../validators');

module.exports = {
    userValidation: (req, res, next) => {
        try {
            const user = req.body;
            const {error} = userValidator.validate(user);

            if (error) {
                return next(new ErrorHandler(
                    error.details[0].message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NO_USER.code))
            };
            next();
        } catch (e) {
            next(e);
        }

    },
    emailValidation: async (req, res, next) => {
        try {
            const {email} = req.body;
            const user = await userService.findByEmail({email});
            if (!user) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_PERSON.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.NOT_FOUND_PERSON.code))
            }
            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }
}
