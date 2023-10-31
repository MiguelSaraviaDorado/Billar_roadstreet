import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from 'src/entities/product.entity';
import { TypeProductModule } from 'src/type_product/type_product.module';

@Module({
  imports    : [TypeOrmModule.forFeature([product]), TypeProductModule],
  providers  : [ProductService],
  controllers: [ProductController],
  exports    : [ProductService],
})
export class ProductModule {}
