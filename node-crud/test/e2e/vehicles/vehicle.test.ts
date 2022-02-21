import { vehicle, fakeVehicle } from '../../mocks/vehicle.mock';
import { createVehicle } from '../../helpers/vehicle.helper';

const itif = (condition: boolean) => (condition ? it : it.skip);

describe('Vehicles', () => {
      
    createVehicle(vehicle);

 
});