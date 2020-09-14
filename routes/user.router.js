const { Router } = require('express');
const userRouter = Router();

const { userController} = require('../controllers');
const { userMiddleware } = require('../middlewares');

userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)
userRouter.delete('/:id', userMiddleware, userController.removeUser)
userRouter.post('/', userMiddleware,  userController.createUser)

module.exports = userRouter;
