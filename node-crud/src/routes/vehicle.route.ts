import express from 'express';

import VehicleController from '../controllers/vehicle.controller';

const router = express.Router();

router.post('/', VehicleController.create);
router.get('/findOne', VehicleController.findOne);

router.get('/', VehicleController.list);
router.put('/', VehicleController.update);

router.delete(
    '/',

    VehicleController.remove,
);

export default router;
