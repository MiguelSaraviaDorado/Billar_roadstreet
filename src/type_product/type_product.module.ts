import { Module } from '@nestjs/common';
import { TypeProductController } from './type_product.controller';
import { TypeProductService } from './type_product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type_product } from 'src/entities/type_product.entity';

@Module({
  imports    : [TypeOrmModule.forFeature([type_product])],
  providers  : [TypeProductService],
  controllers: [TypeProductController],
  exports    : [TypeProductService],
})
export class TypeProductModule {}
