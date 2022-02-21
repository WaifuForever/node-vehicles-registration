import supertest from 'supertest';

import { app } from '../../src/config/express.config';
import { getMessage } from '../../src/utils/message.util';
import { IUpdate, IVehicle } from '../../src/interfaces/vehicle.interface';

import { vehicle, vehicle2 } from '../mocks/vehicle.mock';

const itif = (condition: boolean) => (condition ? it : it.skip);

const createVehicle = (payload: any) => {
    it('POST /vehicle', async () => {
        await supertest(app)
            .post('/vehicles')
            .send(payload)
            .expect(200)
            .then(response => {
                expect(
                    typeof response.body === 'object' &&
                        !Array.isArray(response.body) &&
                        response.body !== null,
                ).toBeTruthy();

                payload._id = response.body.data._id;
                expect(response.body).toEqual({
                    message: getMessage('vehicle.create.success'),
                    data: schema(payload),
                    metadata: {},
                    status: 200,
                });
            });
    });

    it('GET /vehicles/findOne', async () => {
        await supertest(app)
            .get(`/vehicles/findOne?_id=${payload._id}`)
            .send({})
            .expect(200)
            .then(response => {
                // Check type and length
                expect(
                    typeof response.body === 'object' &&
                        !Array.isArray(response.body) &&
                        response.body !== null,
                ).toBeTruthy();
                console.log(response.body);
                expect(response.body).toMatchObject({
                    message: getMessage('vehicle.findOne.success'),
                    data: schema(payload),
                    metadata: {},
                    status: 200,
                });
            });
    });
};

const updateVehicle = (payload: IUpdate, message: string) => {
    it(`PUT /vehicles ${message}`, async () => {
        payload._id = payload._id === 'a' ? vehicle._id : vehicle2._id;
        await supertest(app)
            .put('/vehicles')
            .send(payload)
            .expect(200)
            .then(response => {
                // Check type and length
                expect(
                    typeof response.body === 'object' &&
                        !Array.isArray(response.body) &&
                        response.body !== null,
                ).toBeTruthy();

                expect(response.body).toMatchObject({
                    message: getMessage('vehicle.update.success'),
                    data: null,
                    metadata: {},
                    status: 200,
                });
                let bool = payload._id === vehicle._id;

                Object.keys(payload).forEach(function (value) {
                    //@ts-ignore
                    if (bool) vehicle[value] = payload[value];
                    //@ts-ignore
                    else vehicle2[value] = payload[value];
                });
            });
    });

    it('GET check previous PUT operation', async () => {
        await supertest(app)
            .get(`/vehicles/findOne?_id=${payload._id}`)
            .send({})
            .expect(200)
            .then(response => {
                // Check type and length
                expect(
                    typeof response.body === 'object' &&
                        !Array.isArray(response.body) &&
                        response.body !== null,
                ).toBeTruthy();

                expect(response.body).toMatchObject({
                    message: getMessage('vehicle.findOne.success'),
                    data: payload,
                    metadata: {},
                    status: 200,
                });
            });
    });
};

const schema = (payload: IVehicle) => {
    return {
        _id: payload._id,
        plaque: payload.plaque,
        chassis: payload.chassis,
        renavam: payload.renavam,
        model: payload.model,
        brand: payload.brand,
        year: payload.year,
    };
};

export { createVehicle, updateVehicle };
