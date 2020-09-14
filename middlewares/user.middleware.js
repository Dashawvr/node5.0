const { ErrorHandler, errors, statusCodeEnum } = require('../error');

module.exports = (req, res, next) => {
    try {
        const user = req.body;
        if(! user.name) {
          return next(new ErrorHandler(
              errors.BAD_REQUEST_NO_USER.message,
              statusCodeEnum.BAD_REQUEST,
              errors.BAD_REQUEST_NO_USER.code))
        }
        if (!user.password || user.password.length < 5) {
            return  next(new ErrorHandler(
                errors.BAD_REQUEST_TOO_WEAK_PASS.message,
                statusCodeEnum.BAD_REQUEST,
                errors.BAD_REQUEST_TOO_WEAK_PASS.code))
        }
        next();
    }
    catch (e) {
        next(e);
    }
}
