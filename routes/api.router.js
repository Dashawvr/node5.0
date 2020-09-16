const {Router} = require('express');
const apiRouter = Router();

const {userRouter, carRouter, authRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carRouter);
apiRouter.use('/auth', authRouter);


module.exports = apiRouter;
