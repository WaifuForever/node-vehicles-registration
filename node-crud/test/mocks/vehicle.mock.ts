import { randomUUID } from 'crypto';
import { IVehicle } from '../../src/interfaces/vehicle.interface';

export const vehicle: IVehicle = {
    _id: randomUUID(),
    plaque: 'CRG-9310',
    renavam: '10101010101',
    chassis: '10101010102321311',
    model: 'a',
    brand: 'ford',
    year: '1980',
};

export const fakeVehicle = {
    _id: randomUUID(),
    plaque: 'CRGs-9315',
    renavam: '10101010s101',
    chassis: '1010101010232131100',
    model: 'ab',
    brand: 'fossard',
    year: '19820',
};
