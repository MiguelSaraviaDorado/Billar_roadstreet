//IMPORT
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { registerProductDto } from 'src/DTOs/registerProduct.dto';

//EXPORT
@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor( private productService: ProductService){}

    @Post('/registerProduct')
    async registerProduct(@Body() R_Product: registerProductDto) {
        return this.productService.registerProduct(R_Product);
    }
}
