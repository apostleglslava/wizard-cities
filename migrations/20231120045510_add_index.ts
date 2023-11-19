import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE INDEX residents_city_id_index ON residents (city_id)
  `);

  return knex.raw(`
    CREATE INDEX residents_first_name_index ON residents (first_name)
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP INDEX residents_city_id_index
  `);

  return knex.raw(`
    DROP INDEX residents_first_name_index
  `);
}

