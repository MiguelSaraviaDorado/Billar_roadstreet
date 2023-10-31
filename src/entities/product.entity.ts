//Import
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { type_product } from "./type_product.entity";

//export
@Entity('product')
export class product {
    @PrimaryGeneratedColumn('identity') id_product: number;

    @Column('varchar',{length:20, nullable:false}) name_product:string;

    @Column('varchar',{length:40}) description:string;

    @Column('numeric') price: number;

    @Column('int') quantity: number;

    @ManyToOne(() => type_product, rproduct => rproduct.r_product) r_typeproduct:type_product;
}