import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
      ALTER TABLE residents ADD CONSTRAINT FK_45d515503b0253f6443a4a97cf8
      FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE NO ACTION ON
      UPDATE NO ACTION;
  `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
      ALTER TABLE residents DROP CONSTRAINT FK_45d515503b0253f6443a4a97cf8
  `);
}