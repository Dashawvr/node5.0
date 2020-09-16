const {carService} = require('../services');

module.exports = {
    createCar: async (req, res, next) => {
        try {
            const car = await carService.createCar(req.body)
            res.json(car);
        }
        catch (e) {
            // res.end(e.message);
            next(e);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const cars = await carService.findAll()
            res.json(cars);
        }
        catch (e) {
            // res.end(e.message);
            next(e);
        }
    },
    getCarId: async (req, res, next) => {
        try {
            const car = await carService.getCarById(+req.params.id)
            res.json({car});
        }
        catch (e) {
            // res.end(e.message);
            next(e);
        }
    },
    updateCar: async (req, res, next) => {
        try {
            const car = await carService.updateCar(req.body, +req.params.id)
            res.json(car, 'Updated Successfully');
        }
        catch (e) {
            // res.end(e.message);
            next(e);
        }
    },
    destroyCar: async (req, res, next) => {
        try {
            const car = await carService.deleteCar(+req.params.id)
            res.json(car);
        }
        catch (e) {
            // res.end(e.message);
            next(e);
        }
    }
}
