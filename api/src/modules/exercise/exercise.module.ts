import { Module } from "@nestjs/common";
import { ExerciseController } from "./controllers/exercise.controller";
import { ExerciseRepository } from "./repositories/exercise.repository";
import { ExerciseService } from "./services/exercise.service";


@Module({
  controllers: [ExerciseController],
  providers: [ExerciseRepository, ExerciseService],
  exports: [ExerciseService]
})
export class ExerciseModule{}