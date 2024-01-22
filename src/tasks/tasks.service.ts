import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/creat-task-dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks; //this still have access to tasks cause it's private
    }


    //find tasks by id
    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id);
    }


    //delete Task
    deleteTask(id: string): void{
        // const index = this.tasks.findIndex(task => task.id === id);
        // if (index > -1) {
        //     const removedTask = this.tasks.splice(index, 1)[0];
        //     return removedTask;
        // }
        this.tasks  = this.tasks.filter(task => task.id != id); //just when filter false , remove !
    }


    //updateTask
    updateTaskStatus(id:string, status: TaskStatus): Task{
        const task = this.getTaskById(id);
        task.status= status;
        return task;
    }





        //create a logic of the function
    createTask(createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto;
        const task: Task = {
            id: uuidv1(),
            title,
            description,
            status: TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }

}
