export interface IVehicle {
    plaque: string;
    chassis: string;
    renavam: string;

    model: string;
    brand: string;
    year: string;
    _id?: string;
}

export interface IUpdate {
    plaque?: string;
    chassis?: string;
    renavam?: string;

    model?: string;
    brand?: string;
    year?: string;
    _id?: string;
}

