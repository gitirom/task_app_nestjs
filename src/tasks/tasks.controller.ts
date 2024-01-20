import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post()
    createTask(
        @Body('title') title: string, //It's a decorator used in NestJS controllers to extract data from the request body and bind it to a handler method's argument.
        @Body('description') description: string,
    ): Task{
        return this.tasksService.createTask(title, description);
    }


    
}
