import { Injectable } from '@nestjs/common';
import DatabaseService from '../database/database.service';
import { ResidentsCityDto } from './dtos/residents-city.dto';

@Injectable()
class ResidentsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(city?: string): Promise<ResidentsCityDto> {
    let queryString = `
        SELECT 
            COUNT(*)::int AS city_resident_name_count,
            names_count.city_names_count,
            cities.name,
            residents.first_name
        FROM residents
        LEFT JOIN cities ON cities.id = residents.city_id
            
        LEFT JOIN (
            SELECT COUNT(id) as city_names_count, city_id from residents
            group by city_id
        ) as names_count on residents.city_id = names_count.city_id
    `;

    if (city) {
      queryString =
        queryString +
        `
      WHERE cities.name LIKE '${city}%'
      `;
    }

    queryString =
      queryString +
      `
    GROUP BY cities.name, names_count.city_names_count, residents.first_name
    ORDER BY city_names_count DESC`;

    const databaseResponse = await this.databaseService.runQuery(queryString);

    const cities_population = [];
    const city_members = [];

    databaseResponse.rows.map((row) => {
      if (
        !cities_population.length ||
        cities_population[cities_population.length - 1].city !== row.name
      ) {
        cities_population.push({
          city: row.name,
          count: row.city_names_count,
        });
      }

      if (
        !city_members.length ||
        city_members[city_members.length - 1].city !== row.name
      ) {
        city_members.push({
          city: row.name,
          members: [],
        });
      }

      if (city_members[city_members.length - 1].city === row.name) {
        city_members[city_members.length - 1].members.push({
          first_name: row.first_name,
          count: row.city_resident_name_count,
        });
      }
    });

    return {
      cities_population,
      city_members,
    } as ResidentsCityDto;
  }
}

export default ResidentsRepository;
