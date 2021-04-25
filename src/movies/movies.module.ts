import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// 여기서 MoviesController 의 constructor 에 MoviesService 를 inject 해준다. (Dependency Injection)
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
