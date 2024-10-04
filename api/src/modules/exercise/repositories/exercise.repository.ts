import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common';
import { CreateExerciseDto, UpdateExerciseDto } from 'src/domain/dtos';
import { ExerciseEntity } from 'src/domain/entities/exercise';

@Injectable()
export class ExerciseRepository extends RepositoryFactory<
  ExerciseEntity,
  CreateExerciseDto,
  UpdateExerciseDto
> {
  constructor() {
    super('exercise');
  }

  findAll() {
    return this.prismaService.exercise.findMany();
  }

  findByUserId(id: number) {
    return this.prismaService.exercise.findMany({
      where: { userId: +id },
    });
  }
}
