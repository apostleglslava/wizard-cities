import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    CREATE TABLE cities (
      id SERIAL NOT NULL,
      name character varying NOT NULL,
      description character varying NULL,
      CONSTRAINT PK_589871db156cc7f92942334ab7e PRIMARY KEY (id)
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    DROP TABLE cities
  `);
}
