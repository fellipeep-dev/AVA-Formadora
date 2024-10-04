import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { ExerciseModule } from './modules/exercise/exercise.module';

@Module({
  imports: [UserModule, ExerciseModule, PrismaModule],
})
export class AppModule {}
