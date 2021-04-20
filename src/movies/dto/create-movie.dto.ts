// DTO : Data Transfer Object
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  // class-validator 의 Decorator 는 실제 request body 값을 검증하는 용도이고
  // typescript type 은 코드 상에서 편의를 위해 부여하는 타입이라고 생각하면 될듯
  // 각각의 type 은 별개지만 직접 일치시켜야함

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsArray()
  @IsString({ each: true })
  readonly genres: string[];
}
