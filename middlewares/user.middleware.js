const { ErrorHandler, errors, statusCodeEnum } = require('../error');
const  { userService } = require('../services');

module.exports = {
    userValidation: (req, res, next) => {
        try {
            const user = req.body;
            if (!user.name) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_NO_USER.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NO_USER.code))
            }
            if (!user.password || user.password.length < 6) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_TOO_WEAK_PASS.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_TOO_WEAK_PASS.code))
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    emailValidation: (req, res, next) => {
        try {
            const { email } = req.body;
            const user = userService.findByEmail( {email});
            if (!user) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_PERSON.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.NOT_FOUND_PERSON.code))
            }
            req.user = user;
            next();
        }
        catch (e) {
            next(e);
        }
        
    }
}
