import * as yup from 'yup';

import { getMessage } from '../utils/message.util';

const validYear = (year : string) => {
    let temp = parseInt(year); 
    return temp <= new Date().getFullYear() && temp > 1900;
}

const vehicles_rules = {
    _id: yup.string().uuid(),
    plaque: yup
        .string()
        .matches(/[A-Z]{3}-[0-9]{4}/, getMessage('vehicle.invalid.plaque')),
    chassis: yup
        .string()
        .matches(/^\s*[0-9]{17}\s*$/, getMessage('vehicle.invalid.chassis')),

    renavam: yup
        .string()
        .matches(/^\s*[0-9]{11}\s*$/, getMessage('vehicle.invalid.renavam')),
    model: yup.string().min(3).max(15),
    brand: yup.string().min(3).max(15),
    year: yup
        .string()
        .matches(/^\s*[0-9]{4}\s*$/, getMessage('vehicle.invalid.year'))
        .test(
            "Range",
            'Must belong to the range',
            val => validYear(val!),
        ),
};

export { vehicles_rules };
