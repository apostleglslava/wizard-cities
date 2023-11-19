import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import ResidentsRepository from './residents.repository';

@Injectable()
export class ResidentsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly residentsRepository: ResidentsRepository,
  ) {}

  async getCitiesData(city?: string) {
    const startData = new Date().getTime();
    const data = await this.residentsRepository.get(city);
    const finishData = new Date().getTime();
    const processTime = finishData - startData;
    const message = {
      requestDuration: processTime,
      requestData: city,
      responseData: data,
      httpStatus: HttpStatus.OK,
    };

    this.httpService.post(`http://localhost:8765/logging`, message, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return data;
  }
}
