import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersSevice: UsersService) {}

  @Get()
  getUsers() {
    return this.usersSevice.findAll();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.usersSevice.findOne(parseInt(userId));
  }

  @Post()
  newUser(@Body() user: User) {
    return this.usersSevice.create(user);
  }

  @Put(':userId')
  updateUser(@Param('userId') userId: number, @Body() user: User) {
    return this.usersSevice.update(userId, user);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: number) {
    return this.usersSevice.remove(userId);
  }

  @Post('/login')
  login(@Body() user: User) {
    return this.usersSevice.login(user);
  }
}
