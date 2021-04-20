import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto extends CreateMovieDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
