import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Product} from './product.model';


@Injectable()
export class ProductsService {

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ) {}

    async insertProduct(title:string,description:string,price:number){
        const newProduct = new this.productModel({
            title:title,
            description:description,
            price:price
        });
        const res = await newProduct.save();
        return res._id;
    }

    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
          id: prod.id,
          title: prod.title,
          description: prod.description,
          price: prod.price,
        }));
      }

}