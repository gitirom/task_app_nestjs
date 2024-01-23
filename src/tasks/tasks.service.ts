import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/creat-task-dto';
import { GetTasksFilterDto } from './dto/get-Task-filter-dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks; //this still have access to tasks cause it's private
    }

    getTaskWithFilters(filterDto: GetTasksFilterDto) {
        const {status, search} = filterDto;
        let tasks = this.getAllTasks();

        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }

        if (search) {
                tasks = tasks.filter(task => task.title.includes(search) || 
                task.description.includes(search),
            );
        }
        return tasks;
    }


    //find tasks by id
    getTaskById(id: string): Task{
        const found = this.tasks.find(task => task.id === id);

        if (!found) {
            throw new NotFoundException(`Task with id ${id} Not Found`);          //handle Error
        }

        return found;

    }


    //delete Task
    deleteTask(id: string): void{
        const found = this.getTaskById(id);
        this.tasks  = this.tasks.filter(task => task.id != found.id); //just when filter false , remove !
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
