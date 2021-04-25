// 'nest g co' 커맨드로 controller 생성

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  // TypeScript 이므로 MoviesService 를 명시하여 사용할 수 있지만,
  // JS 에서는 명시하지 않는다. movies.module 에서 inject 해줄 뿐 !
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    // getAll(@Req() req, @Res() res): Movie[] {  // nest js 를 express 처럼 사용하는 방법
    //   res.json();                              // 하지만, 이렇게 작성 시, nest js 가 제공하는
    //                                               express / fastify 두 프레임워크 간 전환 시 호환에 문제가 생김
    //                                               (fastify 는 express 보다 2배 빠르다는 framework)
    return this.moviesService.getAll();
  }

  // ':id' 보다 위에 있어야 라우팅 가능 아니면 year=xx 부분을 id 로 인식함
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie ${searchingYear}`;
  }

  // uri 의 data 는 모두 string 이지만
  // main.ts 의 미들웨어 ValidationPipe - transform 에서 dto 에 맞춰 type 을 변환해주므로
  // number 로 받을 수 있다.
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // @Put()  // 모든 movie 를 업데이트 하게된다.

  // id 로 하나만 업데이트 하므로 patch 가 적절
  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
