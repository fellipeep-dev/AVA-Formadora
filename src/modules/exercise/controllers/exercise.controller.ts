import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExerciseService } from '../services/exercise.service';
import { ExerciseEntity } from 'src/domain/entities';
import { CreateExerciseDto, UpdateExerciseDto } from 'src/domain/dtos';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  createExercise(
    @Body() createExerciseDto: CreateExerciseDto,
  ): Promise<ExerciseEntity> {
    return this.exerciseService.create(createExerciseDto);
  }

  @Get()
  findAllExercises(): Promise<ExerciseEntity[]> {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findByUserId(@Param('id') id: number): Promise<ExerciseEntity> {
    return this.exerciseService.findByUserId(id);
  }

  @Put(':id')
  updateExercise(
    @Param('id') id: number,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<ExerciseEntity> {
    updateExerciseDto.id = id;
    return this.exerciseService.update(updateExerciseDto);
  }

  @Delete(':id')
  removeExercise(@Param('id') id: number): Promise<ExerciseEntity> {
    return this.exerciseService.remove(id);
  }
}
