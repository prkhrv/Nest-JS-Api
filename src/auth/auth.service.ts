import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {users} from '../users/user.model'

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<users>,
        ){}

        async login(user_name:string,password: string){
            const user = await this.userModel.findOne({user_name: user_name}).exec();
            if(user == null){
                return NotFoundException;
            }else{
                const passwordIsValid = bcrypt.compareSync(password, user.password);
                
            } 

        }
}
