import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto 파일에 decorator 가 지정되지 않은 property 는 body 에서 제거하고 받음
      forbidNonWhitelisted: true, // whitelist 로 제거된 property 들가 있을 경우 400 Error return
      transform: true, // url 에 포함된 parameter 를 DTO 에 정의된 타입으로 변형 (예, string -> number)
    }),
  );
  await app.listen(3000);
}
bootstrap();
