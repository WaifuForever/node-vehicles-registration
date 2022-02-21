import { Request, Response } from 'express';
import { randomUUID } from 'crypto';

import knex from '../database/db';
import { IVehicle } from '../interfaces/vehicle.interface';
import { getMessage } from '../utils/message.util';

const selection: IVehicle = {
    _id: '_id',
    plaque: 'plaque',
    renavam: 'renavam',
    chassis: 'chassis',
    model: 'model',
    brand: 'brand',
    year: 'year',
};

async function create(req: Request, res: Response) {
    const { plaque, chassis, renavam, model, brand, year }: IVehicle = req.body;

    try {
        const vehicle: IVehicle = {
            _id: randomUUID(),
            plaque: plaque,
            chassis: chassis,
            renavam: renavam,
            model: model,
            brand: brand,
            year: year,
        };

        const result = await knex('vehicles').insert(vehicle);
        console.log(vehicle)
       
        return res.jsonOK(vehicle, getMessage('vehicle.create.success'), {});
    } catch (error) {
        console.log(error);
        return res.jsonBadRequest(error, null, null);
    }
}

async function findOne(req: Request, res: Response) {
    const { _id } = req.query;

    try {
        const vehicle: Array<IVehicle> = await knex('vehicles')
            .where({ _id: _id?.toString() })
            .select(selection);
        console.log(vehicle);
        return res.jsonOK(
            vehicle[0],
            getMessage('vehicle.findOne.success'),
            {},
        );
    } catch (err) {
        console.log(err);
        return res.jsonBadRequest({ err: err }, null, null);
    }
}

async function list(req: Request, res: Response) {
    try {
        const vehicles: Array<IVehicle> = await knex('vehicles').select(
            selection,
        ).where({});

        return res.jsonOK(
            vehicles,
            getMessage('vehicle.list.success') + vehicles.length,
            {},
        );
    } catch (err) {
        console.log(err);
        return res.jsonBadRequest({ err: err }, null, null);
    }
}

async function update(req: Request, res: Response) {
    const { _id } = req.body;
    delete req.body._id;
    try {
        const result = await knex('vehicles')
            .where('_id', _id)
            .update(req.body);
        return res.jsonOK(result, getMessage('vehicle.update.success'), {});
    } catch (err) {
        console.log(err);
        return res.jsonBadRequest({ err: err }, null, null);
    }
}

async function remove(req: Request, res: Response) {
    const { _id } = req.query;

    try {
        await knex('vehicles').where('_id', _id?.toString()).delete();
        return res.jsonOK(null, null, {});
    } catch (err) {
        console.log(err);
        return res.jsonBadRequest({ err: err }, null, null);
    }
}

export default { create, findOne, list, update, remove };
