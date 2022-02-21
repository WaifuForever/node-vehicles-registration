import { vehicle, fakeVehicle } from '../../mocks/vehicle.mock';
import { createVehicle, updateVehicle } from '../../helpers/vehicle.helper';

const itif = (condition: boolean) => (condition ? it : it.skip);

describe('Vehicles', () => {
      
    createVehicle(vehicle);
    updateVehicle({ renavam: '10101010301', _id: 'a' }, 'update renavam');
 
});