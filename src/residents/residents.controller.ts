import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDocs } from '../decorators/response-docs.decorators';
import { ResidentsCityDto } from './dtos/residents-city.dto';
import GetResidentsByCityNameQuery from './getResidentsByCityName';
import { ResidentsService } from './residents.service';

@ApiTags('residents')
@Controller('residents')
@UseInterceptors(ClassSerializerInterceptor)
export default class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get cities residents data' })
  @ResponseDocs({
    description: 'Returns cities residents data',
    type: ResidentsCityDto,
  })
  getPosts(@Query() { city }: GetResidentsByCityNameQuery) {
    return this.residentsService.getCitiesData(city);
  }
}
