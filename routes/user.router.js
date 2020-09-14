const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.contoller');
const { userMiddleware } = require('../middlewares');

userRouter.get('/', controller.getAllUsers)
userRouter.get('/:id', controller.getUserById)
userRouter.delete('/:id', userMiddleware, controller.removeUser)
userRouter.post('/', userMiddleware,  controller.createUser)

module.exports = userRouter;
