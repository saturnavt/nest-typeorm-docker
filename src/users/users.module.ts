import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { JwtModule } from '../jwt/jwt.module';
@Module({
  imports: [TypeOrmModule.forFeature([User]), BcryptModule, JwtModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
