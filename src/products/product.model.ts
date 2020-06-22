import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },

});


export interface Product{
    id:string;
    title:string;
    description:string;
    price:number;
}