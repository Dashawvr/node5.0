const { ErrorHandler, errors, statusCodeEnum } = require('../error');

module.exports = {
    carsValid: (req, res, next) => {
        try {
            const car = req.body;
            if (!car.model) {
                return next( new ErrorHandler(
                    errors.BAD_REQUEST_NOT_VALID_MODEL.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors. BAD_REQUEST_NOT_VALID_MODEL.code
                ));
            }
            if (car.price < 0 || car.price === 0) {
                return next( new ErrorHandler(
                    errors.BAD_REQUEST_NOT_POSITIVE_PRISE.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors. BAD_REQUEST_NOT_POSITIVE_PRISE.code
                ));
            }
            if (car.year > 2020 || car.year <= 1000) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_NOT_VALID_YEAR.message,
                    statusCodeEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NOT_VALID_YEAR.code
                ));
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
