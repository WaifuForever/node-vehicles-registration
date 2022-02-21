import express from 'express';

import VehicleController from '../controllers/vehicle.controller';
import VehicleMiddleware from '../middlewares/vehicle.middleware';

const router = express.Router();

router.post('/', VehicleMiddleware.create, VehicleController.create);
router.get('/findOne', VehicleController.findOne);

router.get('/', VehicleController.list);
router.put('/', VehicleController.update);

router.delete(
    '/',

    VehicleController.remove,
);

export default router;
