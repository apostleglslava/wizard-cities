import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    CREATE TABLE residents (
      id SERIAL NOT NULL,
      first_name character varying NOT NULL,
      last_name character varying NOT NULL,
      city_id integer NOT NULL,
      CONSTRAINT PK_589871db156cc7f929424ab7e PRIMARY KEY (id)
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    DROP TABLE residents
  `);
}