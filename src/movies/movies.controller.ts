import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

// 'nest g co' 커맨드로 controller 생성

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // ':id' 보다 위에 있어야 라우팅 가능 아니면 year=xx 부분을 id 로 인식함
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // @Put()  // 모든 movie 를 업데이트 하게된다.

  // id 로 하나만 업데이트 하므로 patch 가 적절
  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
