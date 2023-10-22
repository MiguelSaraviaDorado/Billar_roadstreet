import { Module } from '@nestjs/common';
import { TypeProductService } from './type_product.service';
import { TypeProductController } from './type_product.controller';
import { TypeProductService } from './type_product.service';

@Module({
  providers: [TypeProductService],
  controllers: [TypeProductController]
})
export class TypeProductModule {}
