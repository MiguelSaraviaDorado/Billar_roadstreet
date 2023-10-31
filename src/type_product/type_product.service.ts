import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerTypeProductDto } from 'src/DTOs/registerTypeProduct.dto';
import { updateTypeProductDto } from 'src/DTOs/updateTypeProduct.dto';
import { type_product } from 'src/entities/type_product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeProductService {
    constructor (@InjectRepository(type_product) private typeproduct_Repository: Repository<type_product>) {}

    //CREATE
    async createTypeProduct (R_TypeProduct: registerTypeProductDto){
        const newTypeProduct = await this.typeproduct_Repository.create(R_TypeProduct);
        return this.typeproduct_Repository.save(newTypeProduct);
    }

    //READ
    async readTypeProduct (){
        const listTypeProduct = await this.typeproduct_Repository.find();
        return listTypeProduct;
    }
    async readoneTypeProduct (id_typeproduct: number){
        const oneTypeProduct = await this.typeproduct_Repository.findOne({ where: { id_typeproduct }});
        return oneTypeProduct;
    }

    //UPDATE
    async updateTypeProduct (id_typeproduct:number, U_TypeProduct: updateTypeProductDto){
        const update_TypeProduct = await this.typeproduct_Repository.findOne({where: { id_typeproduct }})
        update_TypeProduct.description_typeproduct = U_TypeProduct.description_typeproduct;
        return this.typeproduct_Repository.save(update_TypeProduct);
    }

    //DELETE
    async deleteTypeProduct (id_typeproduct: number){
        const deleteTypeProduct = await this.typeproduct_Repository.findOne({ where: {id_typeproduct}});
        return this.typeproduct_Repository.delete(deleteTypeProduct);
    }
}
