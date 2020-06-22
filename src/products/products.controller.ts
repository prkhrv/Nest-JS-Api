import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
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