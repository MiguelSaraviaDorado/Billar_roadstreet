//IMPORT
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { person } from './person.entity';
import { user } from './user.entity';
import { pool_table } from './pool_table.entity';
import { bill } from './bill.entity';

//EXPORT
@Entity()
export class reserve {
    @PrimaryGeneratedColumn('identity') idreserve: number;

    @Column('date') initial_date: Date;

    @Column('date') final_date:Date;

    @Column('char', {length:3}) status: string;

    @Column('numeric') total: number;

    @ManyToOne(() => person, (rperson)=> rperson.treserve) rreserve: person;

    @ManyToOne(() => user, (rruser) => rruser.rruser) rruser: user;

    @ManyToOne(() => pool_table, (rpooltable) => rpooltable.r_poolt) rpooltable: pool_table;

    @ManyToOne(() => bill, (rbill) => rbill.tbill) rbill: bill;
}