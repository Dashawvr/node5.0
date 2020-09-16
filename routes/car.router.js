const {Router} = require('express');
const { carController } = require('../controllers');
const { carMiddleware } = require ('../middlewares')

const carRouter = Router();
// // read
carRouter.get('/', carController.getAll);
// //by id
carRouter.get('/:id', carController.getCarId);
// // // create
carRouter.post('/', carMiddleware.carValidation, carController.createCar);
// // //update
carRouter.put('/:id',carMiddleware.carValidation, carController.updateCar);
// // // delete
carRouter.delete('/:id', carController.destroyCar);

module.exports = carRouter;
