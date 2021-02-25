import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from "./dto/tasks.dto";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getTasks(){
        return this.taskService.findAll();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        return this.taskService.findOne(parseInt(taskId));
    }

    @Post()
    newTask(@Body() task: Task){
        return this.taskService.create(task);
    }

    @Put(':taskId')
    updateTask(@Param('taskId') taskId: string, @Body() task: Task){
        return this.taskService.update(parseInt(taskId), task);
    }

    @Delete(':taskId')
    deleteTask(@Param('taskId') taskId: string){
        return this.taskService.remove(parseInt(taskId));
    }
}
