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

// 'nest g co' 커맨드로 controller 생성

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  // @Post()
  // create() {
  //   return 'This will create a movie';
  // }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // @Put()  // 모든 movie 를 업데이트 하게된다.

  // id 로 하나만 업데이트 하므로 patch 가 적절
  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    // return `This will update a movie with the id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

  // ':id' router 보다 위에 있어야함
  // @Get('search')
  // search() {
  //   return 'We are searching for a movie with a title';
  // }
}
