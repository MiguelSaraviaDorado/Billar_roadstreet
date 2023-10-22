//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { bill } from "./bill.entity";

//EXPORT
@Entity()
export class time_pool_table{
    @PrimaryGeneratedColumn('identity') id_timepooltable: number;

    @Column('varchar', {length:10, nullable:false}) description: string;

    @Column('numeric') price: number;

    @OneToMany(() => bill, (rbill) => rbill.r_bill) r_timepool: bill[];
}