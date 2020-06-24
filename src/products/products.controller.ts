/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    async addProduct(
      @Body('title') prodTitle: string,
      @Body('description') prodDesc: string,
      @Body('price') prodPrice: number,
    ) {
      const generatedId = await this.productsService.insertProduct(
        prodTitle,
        prodDesc,
        prodPrice,
      );
      return { id: generatedId };
    }

    @Get()
    async getAllProducts() {
      const products = await this.productsService.getProducts();
      return products;
    }
}