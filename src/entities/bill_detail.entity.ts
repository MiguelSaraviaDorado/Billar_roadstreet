//IMPORT
import { Column, Entity, ManyToOne } from 'typeorm';
import { product } from './product.entity';
import { bill } from './bill.entity';

//EXPORT
@Entity()
export class bill_detail {

    @ManyToOne(() => product, (rtproduct) => rtproduct.r_bdetail) rid_product:product;

    @ManyToOne(() => bill, (rtbill)=> rtbill.r_bill) rid_bill:bill;

    @Column('int') cantidad: number;

    @Column('numeric') subtotal: number;
}