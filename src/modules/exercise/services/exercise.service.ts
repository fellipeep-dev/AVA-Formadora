import { ServiceBase } from 'src/common';
import { CreateExerciseDto, UpdateExerciseDto } from 'src/domain/dtos';
import { ExerciseRepository } from '../repositories/exercise.repository';
import { Injectable } from '@nestjs/common';
import { ExerciseEntity } from 'src/domain/entities';

@Injectable()
export class ExerciseService
  implements ServiceBase<ExerciseEntity, CreateExerciseDto, UpdateExerciseDto>
{
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async create(dto: CreateExerciseDto): Promise<ExerciseEntity> {
    const exercise = await this.exerciseRepository.create(dto);

    return exercise;
  }

  async findAll(): Promise<ExerciseEntity[]> {
    const data = await this.exerciseRepository.findAll();

    return data;
  }

  async findByUserId(id: number): Promise<ExerciseEntity> {
    const exercise = await this.exerciseRepository.findByUserId(id);

    return exercise;
  }

  async update(dto: UpdateExerciseDto): Promise<ExerciseEntity> {
    const update = await this.exerciseRepository.update(dto);

    return update;
  }

  async remove(id: number): Promise<ExerciseEntity> {
    const remove = await this.exerciseRepository.delete(id);

    return remove;
  }
}
