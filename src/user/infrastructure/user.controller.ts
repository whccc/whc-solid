import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../application/user.service';
import { User } from '../domain/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
