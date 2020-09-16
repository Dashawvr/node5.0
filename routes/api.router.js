const {Router} = require('express');
const apiRouter = Router();

const {userRouter, carRouter, authRouter} = require('../routes');

apiRouter.use('/auth', authRouter);
apiRouter.use('/cars', carRouter);
apiRouter.use('/users', userRouter);




module.exports = apiRouter;
