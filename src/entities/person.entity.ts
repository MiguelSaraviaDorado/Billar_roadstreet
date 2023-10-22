//IMPORT
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { user } from './user.entity';
import { reserve } from './reserve.entity';

//EXPORT
@Entity()
export class person {
    @PrimaryGeneratedColumn('identity') idperson: number;

    @Column('int') dni: number;

    @Column('varchar', {length:20, nullable:false}) name: string;

    @Column('varchar', {length:30, nullable:false}) last_name: string;

    @Column('date') date_person: Date;

    @Column('int') cellphone: number;

    @OneToMany(() => user, (tperson) => tperson.ruser) truser:user[];

    @OneToMany(() => reserve, (treserve) => treserve.rreserve) treserve:reserve[];
}