import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';

import { vehicles_rules as rules } from '../utils/yup.util';

async function create(req: Request, res: Response, next: NextFunction) {
    let schema = yup.object().shape({
        _id: rules._id.required(),
        chassis: rules.chassis.required(),
        renavam: rules.renavam.required(),

        plaque: rules.plaque.required(),
        model: rules.model.required(),
        brand: rules.brand.required(),
        year: rules.year.required(),
    });

    schema
        .validate(req.body, { stripUnknown: true })
        .then(result => {
            req.body = result;

            next();
        })
        .catch(function (e) {
            console.log(e);
            return res.jsonBadRequest(null, null, e.path + ' : ' + e.message);
        });
}

export default { create };
