import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import ResidentsController from './residents.controller';
import ResidentsRepository from './residents.repository';
import { ResidentsService } from './residents.service';

@Module({
  imports: [HttpModule],
  controllers: [ResidentsController],
  providers: [ResidentsService, ResidentsRepository],
})
export class ResidentsModule {}
