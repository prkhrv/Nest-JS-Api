import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductsSchema } from './product.model';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
    imports:[MongooseModule.forFeature([{name: 'Product', schema: ProductsSchema}])],
    controllers:[ProductsController],
    providers:[ProductsService]
})
export class ProductsModule {}
