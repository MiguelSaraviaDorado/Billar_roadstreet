//IMPORT
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { type_product } from './type_product.entity';
import { bill_detail } from './bill_detail.entity';

//EXPORT
@Entity()
export class product {
    @PrimaryGeneratedColumn('identity') id_product: number;

    @Column('varchar', {length:20, nullable:false}) nameproduct: string;

    @Column('varchar', {length:40}) description: string;

    @Column('numeric', {nullable:false}) price: number;

    @Column('int', {nullable:false}) quantity: number;

    @ManyToOne(() => type_product, (ttypeproduct) => ttypeproduct.rtproduct) rproduct: type_product;

    @OneToMany(() => bill_detail, (tbill_detail) => tbill_detail.rid_bill) r_bdetail: bill_detail[];
}