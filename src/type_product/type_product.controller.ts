//IMPORT
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypeProductService } from './type_product.service';
import { registerTypeProductDto } from 'src/DTOs/registerTypeProduct.dto';
import { updateTypeProductDto } from 'src/DTOs/updateTypeProduct.dto';

//export
@ApiTags('Type Product')
@Controller('type-product')
export class TypeProductController {
    constructor(private serviceTypeProduct: TypeProductService){}

    @Post('/RegisterTypeProduct')
    registerTypeProduct(@Body() registerTypeProduct: registerTypeProductDto){
        return this.serviceTypeProduct.createTypeProduct(registerTypeProduct);
    }

    @Get('/ListTypeProduct')
    listTypeProduct(){
        return this.serviceTypeProduct.readTypeProduct();
    }

    @Get('/ListTypeProduct:id_typeproduct')
    listoneTypeProduct(@Param('id_typeproduct') id_typeproduct: number){
        return this.serviceTypeProduct.readoneTypeProduct(id_typeproduct);
    }

    @Put('/UpdateTypeProduct')
    updateTypeProduct(@Param('id_typeproduct') id_typeproduct: number, @Body() update_TypeProduct: updateTypeProductDto){
        return this.serviceTypeProduct.updateTypeProduct(id_typeproduct,update_TypeProduct);
    }

    @Delete('/DeleteTypeProduct')
    deleteTypeProduct(@Param('id_typeproduct') id_typeproduct: number){
        return this.serviceTypeProduct.deleteTypeProduct(id_typeproduct);
    }
}
