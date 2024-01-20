import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController { 
    //inject instances of MyService into other components using constructor injection
    constructor(private tasksService: TasksService){}
    
    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }
    
}
