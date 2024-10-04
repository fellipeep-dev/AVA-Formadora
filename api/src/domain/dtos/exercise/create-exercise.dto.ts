import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  weight: string;

  @IsNumber()
  @IsNotEmpty()
  series: number;

  @IsNumber()
  @IsNotEmpty()
  repetitions: number;
}
