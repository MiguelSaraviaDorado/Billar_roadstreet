//import
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerProductDto } from 'src/DTOs/registerProduct.dto';
import { updateProductDto } from 'src/DTOs/updateProduct.dto';
import { product } from 'src/entities/product.entity';
import { TypeProductService } from 'src/type_product/type_product.service';
import { Repository } from 'typeorm';

//export

@Injectable()
export class ProductService {
    constructor (@InjectRepository(product) private productRepository: Repository <product>, private typeproductServices: TypeProductService){}

    //CREATE
    async registerProduct (register_product: registerProductDto){
        const newregisterProduct = await this.productRepository.save(register_product);
        return newregisterProduct;
    }

    //READ
    async getProduct (){
        const allProducts = await this.productRepository.find();
        return allProducts;
    }
    async getOneProduct (id_product: number){
        const findProduct = await this.productRepository.findOne({
            where: {id_product}
        })
        return findProduct;
    }

    //UPDATE
    async updateProduct (id_product: number, update_product){
        const Update_Product = await this.productRepository.update(id_product, update_product);
        return Update_Product;
    }

    //DELETE
    async deleteProduct (id_product:number) {
        const DeleteProduct = await this.productRepository.delete(id_product);
        return DeleteProduct;
    }
}