import { Exercise } from '@prisma/client';

export class ExerciseEntity implements Exercise {
  id: number;
  userId: number;
  name: string;
  weight: string;
  series: number;
  repetitions: number;
}
