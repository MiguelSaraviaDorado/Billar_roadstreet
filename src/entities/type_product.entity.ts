//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { product } from './product.entity';

//EXPORT
@Entity()
export class type_product {
    @PrimaryGeneratedColumn('identity') id_typeproduct: number;

    @Column('varchar', {length:30}) description_typeproduct: string;

    @OneToMany( () => product, (tproduct) => tproduct.rproduct) rtproduct: product[];  
}