import { Module } from '@nestjs/common';
import { TaskModule } from 'src/task/task.module';
import { TaskExecutionController } from './task-execution.controller';
import { TaskExecutionService } from './task-execution.service';

@Module({
  imports: [TaskModule],
  controllers: [TaskExecutionController],
  providers: [TaskExecutionService]
})
export class TaskExecutionModule {}
