import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/user.dto';
import { AuthGuard } from '../auth/jwt.auth.guard';
@Controller('users')
export class UsersController {
  constructor(private usersSevice: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUsers() {
    return this.usersSevice.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.usersSevice.findOne(parseInt(userId));
  }

  @Post()
  newUser(@Body() user: User) {
    return this.usersSevice.create(user);
  }

  @UseGuards(AuthGuard)
  @Put(':userId')
  updateUser(@Param('userId') userId: number, @Body() user: User) {
    return this.usersSevice.update(userId, user);
  }

  @UseGuards(AuthGuard)
  @Delete(':userId')
  deleteUser(@Param('userId') userId: number) {
    return this.usersSevice.remove(userId);
  }

  @Post('/login')
  login(@Body() user: User) {
    return this.usersSevice.login(user);
  }
}
