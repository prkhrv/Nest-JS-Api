/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {users} from './user.model';

@Injectable()
export class UsersService {
    constructor(
    @InjectModel('Users') private readonly userModel: Model<users>,
    ){}

    async addUser(user_name: string, password: string){
        const newUser = new this.userModel({
            user_name: user_name,
            password: password
        });
        const res = newUser.save();
        return res;
    }


    async getUsers(){
        const get_users = await this.userModel.find().exec();
        return get_users;
    }
}
