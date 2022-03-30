import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatetaskDTO } from './dtos/create-task.dto';
import { UpdatetaskDTO } from './dtos/update-task.dto copy';
import { TaskService } from './task.service';

@Controller('medidas')
@UseGuards(AuthGuard('jwt'))
export class TaskController {


    constructor(private taskService: TaskService){
    }

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks();
    }

    @Get("/:id")
    getTaskById(@Param('id') id){
        return this.taskService.getTaskById(id);
        }
    
    @Post()    
    createTask(@Body() createTaskDTO : CreatetaskDTO){
        return this.taskService.createTask(createTaskDTO);
    }
    
    @Put("/:id")
    updateTask(@Param('id')id, @Body() UpdatetaskDTO : UpdatetaskDTO){
        return this.taskService.updateTask(id, UpdatetaskDTO);
        }

    @Delete('/:id')
    deleteTask(@Param('id')id){
        return this.taskService.deleteTask(id);
    }

    }