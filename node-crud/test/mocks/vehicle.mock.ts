import { randomUUID } from 'crypto';
import { IVehicle } from '../../src/interfaces/vehicle.interface';

export const vehicle: IVehicle = {
    _id: randomUUID(),
    plaque: 'CRG-9310',
    renavam: '10101010101',
    chassis: '10101010102321311',
    model: 'abc',
    brand: 'ford',
    year: '1980',
};


export const vehicle2: IVehicle = {
    _id: randomUUID(),
    plaque: 'DYT-6510',              
    renavam: '25413652486',
    chassis: '36452454126710036',    
    model: 'dsa',
    brand: 'ferrari',
    year: '2000',
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
