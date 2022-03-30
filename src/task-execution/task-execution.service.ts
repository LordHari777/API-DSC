import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { TaskService } from 'src/task/task.service';

@Injectable()
export class TaskExecutionService {
        constructor(private taskService: TaskService){}

    async executeTask(id, user){
        return this.taskService.setExecutor(id, user);
    }

    async finishTask(id, user){
        return this.taskService.finishExecutor(id, user);
    }

    getAllByUser(user: User) {
        return this.taskService.getAllByUser(user);    }
}
