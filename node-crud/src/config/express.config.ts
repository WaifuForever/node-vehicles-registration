import express from 'express';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

import corsOptionsDelegate from './cors.config';
import limiter from './limiter.config';

import { response } from '../middlewares/response.middleware';

import appRoute from '../routes/app.route';
import vehicleRoute from '../routes/vehicle.route';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptionsDelegate));
app.use(limiter); // limiting all requests
app.use(response);
app.use(appRoute);
app.use('/vehicles', vehicleRoute);

export { app };
