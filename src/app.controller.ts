import { Controller, Get, Param, Post, Req, Redirect, HttpCode, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/guwa')
  getHello() {
    return { name: 'Gawr Guwa', country: 'Atlantis' };
  }

  // @Get('/:userId')
  // getUser(@Param() userId: number) {
  //   return userId;
  // }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get()
  @Redirect('https://www.ucheazubuko.com', 302)
  getSite() {
    return {
      url: 'https://stackabuse.com'
    }
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'User added to db!';
  }

  //DELETE
  @Delete(':/userId')
  deleteUser(@Param() userId: number) {
    return userId;
  }

  //PATCH
  @Patch('/:userId')
  updateUser(@Req() req: Request) {
    return req.body;
  }



}
