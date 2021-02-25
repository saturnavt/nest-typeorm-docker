import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from "./entities/tasks.entity";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ){}
    
    findAll(){
        return this.taskRepository.find();
    }

    findOne(id: number){
        return this.taskRepository.findOne(id);
    }

    create(body: any){
        const newUser = this.taskRepository.create(body);
        return this.taskRepository.save(newUser);
    }

    async update(id: number, body: any){
        const task = await this.taskRepository.findOne(id);
        this.taskRepository.merge(task, body);
        return this.taskRepository.save(task);
    }

    remove(id: number){
        return this.taskRepository.delete(id);
    }
}
