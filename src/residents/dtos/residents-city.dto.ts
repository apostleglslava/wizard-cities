import { ApiResponseProperty } from '@nestjs/swagger';

export class citiesPopulationDto {
  @ApiResponseProperty({ example: 'Dnipro' })
  city: string;

  @ApiResponseProperty({ example: 1000 })
  count: number;
}

export class cityMemberDto {
  @ApiResponseProperty({ example: 'Alex' })
  first_name: string;

  @ApiResponseProperty({ example: 1000 })
  count: number;
}
export class cityMembersDto {
  @ApiResponseProperty({ example: 'Dnipro' })
  city: string;

  @ApiResponseProperty({ type: [cityMemberDto] })
  readonly members: [cityMemberDto];
}
export class ResidentsCityDto {
  @ApiResponseProperty({ type: [citiesPopulationDto] })
  readonly cities_population: [citiesPopulationDto];

  @ApiResponseProperty({ type: [cityMembersDto] })
  readonly city_members: [cityMembersDto];
}
