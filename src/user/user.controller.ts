import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
  } from '@nestjs/common';
  import { Request } from 'express';
  import { UserService } from './user.service';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { ParseIntPipe } from '@nestjs/common';

  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    getUsers() {
      return this.userService.get();
    }
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
      return this.userService.getUser(userId);
    }
    @Post()
    store(@Req() req: Request) {
      return this.userService.create(req);
    }
    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto,
        @Req() req: Request, @Param() param: { userId: number }) {
      return this.userService.update(updateUserDto, param);
    }
    @Delete()
    delete(@Param('userId', ParseIntPipe) userId: number) {
      return this.userService.delete(userId);
    }
  }
  