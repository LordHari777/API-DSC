import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { CreatetaskDTO } from './dtos/create-task.dto';
import { UpdatetaskDTO } from './dtos/update-task.dto copy';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    
    
    constructor(private taskRepository: TaskRepository){}

    getAllTasks(){
        return this.taskRepository.getAllTasks();
    }

    getAllByUser(user: User) {
        return this.taskRepository.find({user});
    }

    getTaskById(id){
        return this.taskRepository.getTaskById(id);
        }
       
    createTask(createTaskDTO : CreatetaskDTO){
        return this.taskRepository.createTask(createTaskDTO);
    }
    
    updateTask(id, UpdatetaskDTO : UpdatetaskDTO){

        return this.taskRepository.updateTask(id, UpdatetaskDTO);
        }

    deleteTask(id){
        return this.taskRepository.deleteTask(id);
    }

    async setExecutor(id , user) {
        const {affected} = await this.taskRepository.update({id: id, user: null}, {user:user}); 
        if(affected == 1){
            return {success: true}
        } else{
            throw new ConflictException("O serviço não pode ser executado")
        }
    }

    async finishExecutor(id , user) {
        const {affected} = await this.taskRepository.update({id: id, user: user}, {finishedAt : new Date()}); 
        if(affected == 1){
            return {success: true}
        } else{
            throw new ConflictException("A task não pode ser finalizada")
        }
    }



    
}
