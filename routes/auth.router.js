const { Router } = require('express');
const authRouter = Router();

const {authController} = require('../controllers');
const { userMiddleware } = require('../middlewares');

authRouter.post('/', userMiddleware.emailValidation,  authController.logIn )

module.exports = authRouter;
