import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  weight: string;

  @IsNumber()
  @IsNotEmpty()
  series: string;

  @IsNumber()
  @IsNotEmpty()
  repetitions: string;
}
