//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { time_pool_table } from './time_pool_table.entity';
import { bill_detail } from './bill_detail.entity';
import { reserve } from './reserve.entity';

//EXPORT
@Entity()
export class bill {
    @PrimaryGeneratedColumn('identity') id_bill: number;

    @Column('date', {nullable:false}) date_bill: Date;

    @Column('char', {length:3}) status: string;

    @Column('numeric') total: number;

    @OneToMany(() => time_pool_table, (tt_pool) => tt_pool.r_timepool) r_idtime: time_pool_table[];

    @OneToMany(() => bill_detail, (t_bdetail) => t_bdetail.rid_bill) r_bill:bill_detail[];

    @OneToMany(() => reserve, (t_bill) => t_bill.rbill) tbill: reserve[];
}