import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async create(body: any) {
    const hashPassword = await this.bcryptService.generateSalt(body.password);
    const userData = {
      username: body.username,
      password: hashPassword,
    };

    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async update(id: number, body: any) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, body);
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async login(body: any) {
    const user = await this.userRepository.findOne({
      where: { username: body.username },
    });

    const checkPassword = await this.bcryptService.compareHash(
      body.password,
      user.password,
    );

    if (checkPassword == true) {
      return this.jwtService.generateToken(body.username);
    } else {
      return 'Error';
    }
  }
}
