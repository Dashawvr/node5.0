const {Router} = require('express');
const apiRouter = Router();

const {userRouter, carRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carRouter);


module.exports = apiRouter;
