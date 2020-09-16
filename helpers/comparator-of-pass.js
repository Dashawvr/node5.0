const {ErrorHandler, statusCodeEnum, errors} = require('../error');

const bcrypt = require('bcrypt');

module.exports = async (password, hashPass) => {
    const isEqualPass = await bcrypt.compare(password, hashPass);
    console.log(isEqualPass);

    if (!isEqualPass) {
       throw new ErrorHandler(
            errors.NOT_FOUND_PERSON.message,
            statusCodeEnum.BAD_REQUEST,
            errors.NOT_FOUND_PERSON.code)
    }

}
