import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Task } from './dto/tasks.dto';
import { TasksService } from './tasks.service';
import { AuthGuard } from "../auth/jwt.auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
@ApiBearerAuth()
@ApiTags("Tasks")
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @UseGuards(AuthGuard)
  @Get()
  getTasks() {
    return this.taskService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.findOne(parseInt(taskId));
  }

  @UseGuards(AuthGuard)
  @Post()
  newTask(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @UseGuards(AuthGuard)
  @Put(':taskId')
  updateTask(@Param('taskId') taskId: string, @Body() task: Task) {
    return this.taskService.update(parseInt(taskId), task);
  }

  @UseGuards(AuthGuard)
  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string) {
    return this.taskService.remove(parseInt(taskId));
  }
}
