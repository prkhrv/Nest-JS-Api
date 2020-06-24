/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';

import {UsersService} from './users.service';
import * as bcrypt from 'bcryptjs';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    async addUser(
      @Body('user_name') userName: string,
      @Body('password') pass: string,
    ){
      const hashedPassword = bcrypt.hashSync(pass, 8);
      const user = await this.userService.addUser(userName,hashedPassword);
      return user;
    }

    @Get()
    async getUser(){
     const users = await this.userService.getUsers();
     return users;
    }
}