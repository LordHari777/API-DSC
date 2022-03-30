import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { TaskRepository } from 'src/task/task.repository';
import { TaskExecutionService } from './task-execution.service';

@Controller('medidas-execution')
@UseGuards(AuthGuard('jwt'))
export class TaskExecutionController {

    constructor(private taskExecutionService: TaskExecutionService){};

    @Post('/medidas/:id')
    startExecutionTask(
        @Param('id') id,
        @GetUser() user : User
        ){
            return this.taskExecutionService.executeTask(id, user)
        }

    @Post('/medidas/:id/finish')
    finishExecutionTask(
        @Param('id') id,
        @GetUser() user : User
        ){
            return this.taskExecutionService.finishTask(id, user)
        }

    @Get('/medidas/user/')
    getUserExecutions(
        @GetUser() user : User
    ){
        return this.taskExecutionService.getAllByUser(user);
    }
}
