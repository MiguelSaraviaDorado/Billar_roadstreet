//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { product } from './product.entity';

//EXPORT
@Entity('type_product')
export class type_product{
    @PrimaryGeneratedColumn('identity') id_typeproduct: number;

    @Column('varchar', {length:30, nullable:false}) description_typeproduct: string;

    @OneToMany(() => product, r_typeproduct => r_typeproduct.r_typeproduct) r_product: product[];
}