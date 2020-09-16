const {ErrorHandler, errors, statusCodeEnum} = require('../error');
const {carValidator:  {carValidator}} = require('../validators');

module.exports = {
    carsValid: (req, res, next) => {
        try {
            const car = req.body;
            const {error} = carValidator.validate(car);

            if (error) {
                return next(new ErrorHandler(
                    error.details[0].message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NO_USER.code))
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}
