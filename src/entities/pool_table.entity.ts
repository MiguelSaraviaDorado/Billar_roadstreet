//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { reserve } from './reserve.entity';

//EXPORT
@Entity()
export class pool_table {
    @PrimaryGeneratedColumn('identity') idtable: number;

    @Column('int') num_table: number;

    @Column('char', {length:3}) status: string;

    @OneToMany (() => reserve, (rreserve) => rreserve.idreserve) r_poolt : reserve[]; 
}