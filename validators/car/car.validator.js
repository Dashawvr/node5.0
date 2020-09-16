const Joi = require('joi');
const {YEAR} = require('../../config/date');

module.exports = Joi.object().keys({
    model: Joi.string().trim().alphanum().min(2).max(50).required(),
    price: Joi.number().integer().positive().required(),
    year: Joi.number().integer().min(1800).max(YEAR).required()
});
