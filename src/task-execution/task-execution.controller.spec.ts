import { Test, TestingModule } from '@nestjs/testing';
import { TaskExecutionController } from './task-execution.controller';

describe('TaskExecutionController', () => {
  let controller: TaskExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskExecutionController],
    }).compile();

    controller = module.get<TaskExecutionController>(TaskExecutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
