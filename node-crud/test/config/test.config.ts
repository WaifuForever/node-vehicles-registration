import knex from '../../src/database/db';

import { up as setVehicles } from '../../src/database/migrations/20220217221725_create_table_vehicles';

async function dropAllCollections() {
    knex.schema.dropTable('vehicles');
}

async function deleteAllData() {
    await knex('vehicles').del();
}

function setupDB() {
    beforeAll(async () => {
        const hasProducts = await knex.schema.hasTable('vehicles');
        if (!hasProducts) await setVehicles(knex);
    });

    afterAll(async () => {
        await deleteAllData();
        //await dropAllCollections();
    });
}

setupDB();
