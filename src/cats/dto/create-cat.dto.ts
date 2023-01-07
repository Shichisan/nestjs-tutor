import { IsString, IsInt } from 'class-validator';

// class validatorの機能を追加したもの
export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}
