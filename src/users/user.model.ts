import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
       user_name:{
           type: String,
           required: true,
           unique:true
       },
       password:{
           type: String,
           required: true
       }

});


export interface users {
    user_name: string;
    password:string;
}