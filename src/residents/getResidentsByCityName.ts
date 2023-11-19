import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

class GetResidentsByCityNameQuery {
  @ApiPropertyOptional({ example: 'Dnipro', required: false })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  city?: string;
}

export default GetResidentsByCityNameQuery;
