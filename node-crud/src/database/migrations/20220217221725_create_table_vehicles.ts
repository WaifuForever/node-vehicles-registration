import { Knex } from 'knex';

const table = 'vehicles';

//prettier-ignore
export async function up(knex: Knex): Promise<void> {
    await knex.raw(`DROP TABLE IF EXISTS "${table}" CASCADE`);
    return knex.schema.createTable(table, (table: Knex.TableBuilder) => {
        table.uuid('_id').primary().notNullable().unique();
        table.string('plaque').notNullable().unique();
        table.string('chassis').notNullable().checkRegex('^\s*[0-9]{17}\s*$');

        table.string('renavam').notNullable().checkRegex('^\s*[0-9]{11}\s*$');
        table.string('model').notNullable();
        table.string('brand').notNullable();
        table.string('year').notNullable().checkRegex('^\s*[0-9]{4}\s*$');
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(table);
}
